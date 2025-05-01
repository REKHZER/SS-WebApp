import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatInputModule, FormsModule, MatButtonModule],
})
export class loginComponent {
    router = inject(Router);
    tokenS = signal('');

    ngOnInit() {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token) {
            this.router.navigate(['/']);
        }
    }

    setAuthToken(): void {
        const token = this.tokenS();
        if (token === '123') {
            localStorage.setItem('AUTH_TOKEN', this.tokenS());
            this.router.navigate(['/']);
        }
    }
}
