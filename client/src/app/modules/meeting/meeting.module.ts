import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlComponent } from './control/control.component';
import { MeetingComponent } from './meeting.controller';
import { MeetingRoutingModule } from './metting.routing.module';
import { VideoComponent } from './video/video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [MeetingComponent, VideoComponent, ControlComponent],
    imports: [
        BrowserModule,
        MeetingRoutingModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [MeetingComponent],
})
export class MeetingModule {}
