import { Routes } from '@angular/router';
import { MrtNotesMakerComponent } from './pages/mrt-notes-maker/mrt-notes-maker.component';
import { AttendanceAnalysisComponent } from './pages/attendance-analysis/attendance-analysis.component';
import { HomeComponent } from './pages/home/home.component';
import { loginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: loginComponent,
        pathMatch: 'full',
    },
    {
        path: '',
        component: HomeComponent,
        children: [
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
        ],
        canActivate: [AuthGuard],
    },
];
