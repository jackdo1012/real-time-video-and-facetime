import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MeetingComponent } from './meeting.component';

const routes: Routes = [
    {
        path: 'meeting/:id',
        component: MeetingComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MeetingRoutingModule {}
