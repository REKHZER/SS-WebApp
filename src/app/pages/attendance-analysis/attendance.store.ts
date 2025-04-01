import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, map, Observable, switchMap, tap } from 'rxjs';
import { AttendanceInfo } from '../../common/models/attendance.models';
import { StupidSquadService } from '../../services/stupid-squad.service';
import { Sort } from '@angular/material/sort';
import { sortAttendanceInfosByName } from '../../common/utils/attendance.utils';

export interface AttendanceStoreState {
    attendanceInfos: AttendanceInfo[];
}

@Injectable()
export class AttendanceStore extends ComponentStore<AttendanceStoreState> {
    stupidSquadService = inject(StupidSquadService);
    attendanceInfos$ = this.select(state => state.attendanceInfos);

    constructor() {
        super({ attendanceInfos: [] });
    }

    private attendanceInfosUpdater = this.updater(
        (state, attendanceInfos: AttendanceInfo[]) => ({
            ...state,
            attendanceInfos: [...attendanceInfos],
        }),
    );

    getAttendanceInfosEffect = this.effect((obs$: Observable<void>) =>
        obs$.pipe(
            switchMap(id =>
                this.stupidSquadService.getAttendances().pipe(
                    tap({
                        next: attendanceInfos => {
                            const sorted =
                                sortAttendanceInfosByName(attendanceInfos);
                            return this.attendanceInfosUpdater(sorted);
                        },
                    }),
                    catchError(() => EMPTY),
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

                            default:
                                return 1;
                        }
                    });
                }),
                tap(attendanceInfos => console.log('okok:', attendanceInfos)),
                tap(attendanceInfos =>
                    this.attendanceInfosUpdater(attendanceInfos),
                ),
            ),
    );
}
