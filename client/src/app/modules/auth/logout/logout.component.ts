import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'auth-logout',
    templateUrl: './logout.component.html',
    styleUrls: [],
})
export class LogoutComponent {
    constructor(
        public auth: AuthService,
        @Inject(DOCUMENT) private doc: Document,
    ) {}

    public logout(): void {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
