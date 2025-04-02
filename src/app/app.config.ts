import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { AppUpdateService } from './services/app-update.service';

export const appConfig: ApplicationConfig = {
    providers: [
        AppUpdateService,
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000',
        }),
        provideHttpClient(withInterceptorsFromDi()),
        provideStore(),
    ],
};
