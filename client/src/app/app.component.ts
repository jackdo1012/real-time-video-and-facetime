import { Component, isDevMode, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Real-Time Video and Facetime';

    constructor(public auth: AuthService) {}

    public ngOnInit(): void {
        if (isDevMode()) {
            console.log('👋 Development!');
        } else {
            console.log('💪 Production!');
        }
    }
}
