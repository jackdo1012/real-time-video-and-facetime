import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthRoutingModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [LoginComponent, LogoutComponent],
    exports: [LoginComponent, LogoutComponent],
    providers: [],
})
export class AuthModule {}
