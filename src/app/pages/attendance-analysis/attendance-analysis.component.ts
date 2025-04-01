import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { AttendanceInfo } from '../../common/models/attendance.models';
import { AttendanceStore } from './attendance.store';

@Component({
    selector: 'app-attendance-analysis',
    templateUrl: 'attendance-analysis.component.html',
    styleUrls: ['attendance-analysis.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, CdkTableModule, MatSortModule],
    providers: [AttendanceStore],
})
export class AttendanceAnalysisComponent {
    attendanceStore = inject(AttendanceStore);

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
        this.attendanceStore.getAttendanceInfosEffect();
    }

    sortChange(attendanceInfos: AttendanceInfo[], sort: Sort) {
        this.attendanceStore.sortAttendanceInfosEffect({
            attendanceInfos,
            sort,
        });
    }
}
