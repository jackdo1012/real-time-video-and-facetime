import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState } from 'src/app/root-store/mediaStatus/state';
import { selectCamStatus } from '../../../root-store/mediaStatus/selectors';

@Component({
    selector: 'meeting-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    constructor(private store: Store) {}

    @ViewChild('webcam')
    private webcam!: ElementRef;

    private navigator: any;
    private localStream!: MediaStream;

    public ngOnInit(): void {}

    public async ngAfterViewInit(): Promise<void> {
        const video = this.webcam.nativeElement;
        this.navigator = <any>navigator;

        this.navigator.getUserMedia =
            this.navigator.getUserMedia ||
            this.navigator.webkitGetUserMedia ||
            this.navigator.mozGetUserMedia ||
            this.navigator.msGetUserMedia;

        this.localStream = await this.navigator.mediaDevices.getUserMedia({
            video: initialState.cam,
            audio: initialState.mic,
        });
        video.srcObject = this.localStream;

        this.store.select(selectCamStatus).subscribe((camStatus) => {
            if (camStatus) {
                video.srcObject = this.localStream;
                video.play();
            } else {
                video.srcObject = null;
            }
        });
    }
}
