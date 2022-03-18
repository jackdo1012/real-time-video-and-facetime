import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<boolean> {
        const isAuthenticated = await firstValueFrom(
            this.auth.isAuthenticated$,
        );
        if (isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
