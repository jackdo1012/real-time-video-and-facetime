import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MeetingModule } from './modules/meeting/meeting.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { RootReducerModule } from './root-store/root-reducer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RootReducerModule,
        BrowserAnimationsModule,
        MeetingModule,
        AuthModule,
        Auth0Module.forRoot({
            domain: environment.auth0Domain,
            clientId: environment.auth0ClientId,
            redirectUri: window.location.origin,
            audience: environment.auth0Identifier,
            scope: environment.auth0Scope,

            httpInterceptor: {
                allowedList: [`${environment.apiUrl}/*`],
            },
        }),
        AppRoutingModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
