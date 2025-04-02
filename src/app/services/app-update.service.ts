import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { UpdateDialogComponent } from '../common/update-dialog/update-dialog.component';
import { filter } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppUpdateService {
    readonly dialog = inject(MatDialog);

    constructor(private readonly updates: SwUpdate) {
        console.log('ok');
        this.showAppUpdateAlert();
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
    }
    doAppUpdate() {
        this.updates.activateUpdate().then(() => document.location.reload());
    }
}
