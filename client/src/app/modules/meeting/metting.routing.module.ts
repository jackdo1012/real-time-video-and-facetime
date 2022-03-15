import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting.controller';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    { path: 'home', component: MeetingComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MeetingRoutingModule {}
