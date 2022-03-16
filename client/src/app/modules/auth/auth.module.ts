import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthRoutingModule,
        MatButtonModule,
    ],
    declarations: [LoginComponent, LogoutComponent],
    exports: [LoginComponent, LogoutComponent],
    providers: [],
})
export class AuthModule {}
