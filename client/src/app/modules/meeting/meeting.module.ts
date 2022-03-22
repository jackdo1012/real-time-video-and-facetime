import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlComponent } from './control/control.component';
import { MeetingComponent } from './meeting.component';
import { MeetingRoutingModule } from './metting.routing.module';
import { VideoComponent } from './video/video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
    declarations: [MeetingComponent, VideoComponent, ControlComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MeetingRoutingModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
    ],
    providers: [AuthGuard],
    bootstrap: [MeetingComponent],
})
export class MeetingModule {}
