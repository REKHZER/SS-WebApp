import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-update-dialog',
    templateUrl: 'update-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, MatDialogModule, MatButton],
})
export class UpdateDialogComponent {
    constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>) {}

    closeDialog() {
        this.dialogRef.close(true);
    }
}
