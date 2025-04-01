import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sitemap',
    templateUrl: 'sitemap.component.html',
    styleUrls: ['sitemap.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule],
})
export class SitemapComponent {}
