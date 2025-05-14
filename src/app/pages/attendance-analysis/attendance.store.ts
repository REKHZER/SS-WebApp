import { inject, Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ComponentStore } from '@ngrx/component-store';
import {
    catchError,
    concatMap,
    delay,
    EMPTY,
    filter,
    forkJoin,
    from,
    map,
    Observable,
    switchMap,
    tap,
    toArray,
    withLatestFrom,
} from 'rxjs';
import { AttendanceInfo } from '../../common/models/attendance.models';
import { RaidHelperEvent } from '../../common/models/raid-helper.models';
import { sortAttendanceInfosByName } from '../../common/utils/attendance.utils';
import { AttendanceService } from '../../services/attendance.service';
import { RaidHelperService } from '../../services/raid-helper.service';

export interface AttendanceStoreState {
    attendanceInfos: AttendanceInfo[];
    events: RaidHelperEvent[];
    isPtr: boolean;
}

@Injectable()
export class AttendanceStore extends ComponentStore<AttendanceStoreState> {
    attendanceService = inject(AttendanceService);
    raidHelperService = inject(RaidHelperService);
    attendanceInfos$ = this.select(state => state.attendanceInfos);
    isPtr$ = this.select(state => state.isPtr);

    pservChannelIds = '1316074810559959090,1371759136835899432';
    ptrChannelIds =
        '1372064830353182730,1372065008250519632,1372065090853011536,1372065167411642378,1372065229235687454';

    constructor() {
        super({ attendanceInfos: [], events: [], isPtr: false });
    }

    private attendanceInfosUpdater = this.updater(
        (state, attendanceInfos: AttendanceInfo[]) => ({
            ...state,
            attendanceInfos: [...attendanceInfos],
        }),
    );

    getAttendanceInfosEffect = this.effect((obs$: Observable<void>) =>
        obs$.pipe(
            withLatestFrom(this.isPtr$),
            switchMap(([_, isPtr]) =>
                this.raidHelperService
                    .getEvents(
                        isPtr ? this.ptrChannelIds : this.pservChannelIds,
                    )
                    .pipe(
                        tap({
                            next: events => {
                                this.updater(state => ({
                                    ...state,
                                    events: [...events],
                                }));
                            },
                        }),
                        catchError(() => EMPTY),
                        switchMap(events =>
                            from(events).pipe(
                                // Émettre chaque événement un par un
                                concatMap(event =>
                                    this.raidHelperService.getRaidplan(
                                        event.id,
                                    ),
                                ),
                                filter(x => x !== null),
                                toArray(), // Convertir la séquence en un tableau une fois terminé
                                switchMap(data =>
                                    this.attendanceService
                                        .getAttendance(events, data)
                                        .pipe(
                                            tap({
                                                next: attendanceInfos => {
                                                    const sorted =
                                                        sortAttendanceInfosByName(
                                                            attendanceInfos,
                                                        );
                                                    this.attendanceInfosUpdater(
                                                        sorted,
                                                    );
                                                },
                                            }),
                                            catchError(() => EMPTY),
                                        ),
                                ),
                            ),
                        ),
                    ),
            ),
        ),
    );

    sortAttendanceInfosEffect = this.effect(
        (obs$: Observable<{ attendanceInfos: AttendanceInfo[]; sort: Sort }>) =>
            obs$.pipe(
                map(({ attendanceInfos, sort }) => {
                    if (sort.direction === '') {
                        return sortAttendanceInfosByName(attendanceInfos);
                    }

                    return attendanceInfos.sort((a, b) => {
                        const value1 = sort.direction === 'asc' ? a : b;
                        const value2 = sort.direction === 'asc' ? b : a;
                        switch (sort.active) {
                            case 'eventCount':
                                return value1.eventCount - value2.eventCount;

                            case 'benchPercentage':
                                return (
                                    value1.benchPercentage -
                                    value2.benchPercentage
                                );

                            case 'absencePercentage':
                                return (
                                    value1.absencePercentage -
                                    value2.absencePercentage
                                );

                            case 'ghostingPercentage':
                                return (
                                    value1.ghostingPercentage -
                                    value2.ghostingPercentage
                                );

                            case 'presencePercentage':
                                return (
                                    value1.presencePercentage -
                                    value2.presencePercentage
                                );

                            case 'userName':
                                return value1.userName > value2.userName
                                    ? 1
                                    : -1;

                            default:
                                return 1;
                        }
                    });
                }),
                tap(attendanceInfos =>
                    this.attendanceInfosUpdater(attendanceInfos),
                ),
            ),
    );
}
