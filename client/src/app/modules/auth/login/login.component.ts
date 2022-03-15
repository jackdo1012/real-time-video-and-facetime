import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'auth-login-page',
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent implements OnInit {
    constructor(public auth: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.auth.isAuthenticated$.subscribe((auth) => {
            if (auth) {
                this.router.navigate(['/home']);
            }
        });
    }

    private async getAccessToken(): Promise<string> {
        const accessToken = await firstValueFrom(
            this.auth.getAccessTokenSilently(),
        );
        return accessToken;
    }

    async loginWithGoogle(): Promise<void> {
        await firstValueFrom(
            this.auth.loginWithPopup({
                connection: 'google-oauth2',
            }),
        );
        const accessToken = await this.getAccessToken();
        console.log(accessToken);
    }

    async loginWithPassword(): Promise<void> {
        await firstValueFrom(
            this.auth.loginWithPopup({
                connection: 'Username-Password-Authentication',
            }),
        );
        const accessToken = await this.getAccessToken();
        console.log(accessToken);
    }
}
