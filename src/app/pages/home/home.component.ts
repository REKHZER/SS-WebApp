import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SitemapComponent } from '../../common/sitemap/sitemap.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, SitemapComponent],
})
export class HomeComponent {}
