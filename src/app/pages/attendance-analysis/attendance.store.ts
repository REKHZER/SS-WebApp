import { inject, Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ComponentStore } from '@ngrx/component-store';
import {
    catchError,
    delay,
    EMPTY,
    forkJoin,
    map,
    Observable,
    switchMap,
    tap,
} from 'rxjs';
import { AttendanceInfo } from '../../common/models/attendance.models';
import { RaidHelperEvent } from '../../common/models/raid-helper.models';
import { sortAttendanceInfosByName } from '../../common/utils/attendance.utils';
import { AttendanceService } from '../../services/attendance.service';
import { RaidHelperService } from '../../services/raid-helper.service';

export interface AttendanceStoreState {
    attendanceInfos: AttendanceInfo[];
    events: RaidHelperEvent[];
}

@Injectable()
export class AttendanceStore extends ComponentStore<AttendanceStoreState> {
    attendanceService = inject(AttendanceService);
    raidHelperService = inject(RaidHelperService);
    attendanceInfos$ = this.select(state => state.attendanceInfos);

    constructor() {
        super({ attendanceInfos: [], events: [] });
    }

    private attendanceInfosUpdater = this.updater(
        (state, attendanceInfos: AttendanceInfo[]) => ({
            ...state,
            attendanceInfos: [...attendanceInfos],
        }),
    );

    getEventsEffect = this.effect((obs$: Observable<void>) =>
        obs$.pipe(
            switchMap(() =>
                this.raidHelperService.getEvents().pipe(
                    tap({
                        next: events => {
                            this.updater(state => ({
                                ...state,
                                events: [...events],
                            }));
                        },
                    }),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    getAttendanceInfosFrontEffect = this.effect((obs$: Observable<void>) =>
        obs$.pipe(
            switchMap(() =>
                this.raidHelperService.getEvents().pipe(
                    switchMap(events => {
                        const obs = events.map(event =>
                            this.raidHelperService.getRaidplan(event.id),
                        );
                        return forkJoin(obs).pipe(
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
                                                return this.attendanceInfosUpdater(
                                                    sorted,
                                                );
                                            },
                                        }),
                                        catchError(() => EMPTY),
                                    ),
                            ),
                        );
                    }),
                ),
            ),
        ),
    );

    sortAttendanceInfosEffect = this.effect(
        (obs$: Observable<{ attendanceInfos: AttendanceInfo[]; sort: Sort }>) =>
            obs$.pipe(
                map(({ attendanceInfos, sort }) => {
                    console.log('\n\n ~ AttendanceStore ~ map ~ sort:', sort);
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
