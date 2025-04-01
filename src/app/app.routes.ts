import { Routes } from '@angular/router';
import { MrtNotesMakerComponent } from './pages/mrt-notes-maker/mrt-notes-maker.component';
import { AttendanceAnalysisComponent } from './pages/attendance-analysis/attendance-analysis.component';

export const routes: Routes = [
    {
        path: 'mrt',
        component: MrtNotesMakerComponent,
        pathMatch: 'full',
    },
    {
        path: 'attendance',
        component: AttendanceAnalysisComponent,
        pathMatch: 'full',
    },
];
