import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { AttendanceInfo } from '../../common/models/attendance.models';
import { AttendanceStore } from './attendance.store';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-attendance-analysis',
    templateUrl: 'attendance-analysis.component.html',
    styleUrls: ['attendance-analysis.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, CdkTableModule, MatSortModule, MatChipsModule],
    providers: [AttendanceStore],
})
export class AttendanceAnalysisComponent {
    attendanceStore = inject(AttendanceStore);
    activatedRoute = inject(ActivatedRoute);

    attedanceInfos: AttendanceInfo[] = [];

    attendanceInfos$ = this.attendanceStore.attendanceInfos$;

    displayedColumns: string[] = [
        'userName',
        'eventCount',
        'benchPercentage',
        'absencePercentage',
        'presencePercentage',
        'ghostingPercentage',
    ];

    async ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.attendanceStore.setState(state => ({
                ...state,
                isPtr: false,
            }));

            if (params['ptr'] === 'true') {
                console.log('icicici');
                this.attendanceStore.setState(state => ({
                    ...state,
                    isPtr: true,
                }));
            }

            this.attendanceStore.getAttendanceInfosEffect();
        });
    }

    sortChange(attendanceInfos: AttendanceInfo[], sort: Sort) {
        this.attendanceStore.sortAttendanceInfosEffect({
            attendanceInfos,
            sort,
        });
    }
}
