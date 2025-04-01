import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SitemapComponent } from './common/sitemap/sitemap.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, SitemapComponent],
})
export class AppComponent {}
