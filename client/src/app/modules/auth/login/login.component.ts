import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'auth-login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        public auth: AuthService,
        private router: Router,
        private http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.auth.isAuthenticated$.subscribe((auth) => {
            if (auth) {
                this.router.navigate(['/home']);
            }
        });
    }

    async loginHandler(
        connection: 'google' | 'username-password',
    ): Promise<void> {
        await firstValueFrom(
            this.auth.loginWithPopup({
                connection:
                    connection === 'google'
                        ? 'google-oauth2'
                        : 'Username-Password-Authentication',
            }),
        );
        this.http.post(`${environment.apiUrl}/login`, {}).subscribe((res) => {
            console.log(res);
        });
    }
}
