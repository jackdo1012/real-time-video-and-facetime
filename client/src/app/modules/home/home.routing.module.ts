import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
