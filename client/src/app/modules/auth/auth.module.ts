import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth.routing.module';
import { environment } from 'src/environments/environment';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        BrowserModule,
        Auth0Module.forRoot({
            domain: environment.auth0Domain,
            clientId: environment.auth0ClientId,
            redirectUri: window.location.origin,
        }),
        AuthRoutingModule,
        MatButtonModule,
    ],
    declarations: [LoginComponent, LogoutComponent],
    exports: [LoginComponent, LogoutComponent],
    providers: [],
})
export class AuthModule {}
