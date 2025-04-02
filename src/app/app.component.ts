import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SitemapComponent } from './common/sitemap/sitemap.component';
import { AppUpdateService } from './services/app-update.service';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './common/update-dialog/update-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, SitemapComponent],
})
export class AppComponent {
    readonly dialog = inject(MatDialog);

    constructor(private readonly updates: SwUpdate) {
        this.updates.versionUpdates.subscribe(() => {
            this.showAppUpdateAlert();
        });
    }

    showAppUpdateAlert() {
        const dialogRef = this.dialog.open(UpdateDialogComponent);

        dialogRef.afterClosed().subscribe(data => {
            this.doAppUpdate();
        });
    }
    doAppUpdate() {
        this.updates.activateUpdate().then(() => document.location.reload());
    }
}
