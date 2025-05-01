import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { UpdateDialogComponent } from './common/update-dialog/update-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
})
export class AppComponent {
    readonly dialog = inject(MatDialog);

    constructor(private readonly updates: SwUpdate) {
        this.updates.versionUpdates
            .pipe(
                filter(
                    ($event: VersionEvent) => $event.type === 'VERSION_READY',
                ),
            )
            .subscribe(() => {
                this.showAppUpdateAlert();
            });
    }

    showAppUpdateAlert() {
        const dialogRef = this.dialog.open(UpdateDialogComponent);

        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.doAppUpdate();
            }
        });
    }
    doAppUpdate() {
        this.updates.activateUpdate().then(() => document.location.reload());
    }
}
