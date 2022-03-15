import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlComponent } from './control/control.component';
import { MeetingComponent } from './meeting.controller';
import { MeetingRoutingModule } from './metting.routing.module';
import { VideoComponent } from './video/video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [MeetingComponent, VideoComponent, ControlComponent],
    imports: [
        BrowserModule,
        MeetingRoutingModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [MeetingComponent],
})
export class MeetingModule {}
