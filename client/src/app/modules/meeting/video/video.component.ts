import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { selectPeerConnection } from 'src/app/root-store/peerConnection/selectors';
import { State } from 'src/app/root-store/peerConnection/state';
import {
    selectCamStatus,
    selectMicStatus,
} from '../../../root-store/mediaStatus/selectors';

@Component({
    selector: 'meeting-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    constructor(
        private store: Store,
        public auth: AuthService,
        private router: Router,
    ) {}

    @ViewChild('webcam')
    private webcam!: ElementRef;

    private connection: State = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private navigator: any = <any>navigator;
    private localStream!: MediaStream | null;
    private remoteStream!: MediaStream;

    public ngOnInit(): void {
        this.store.select(selectPeerConnection).subscribe((conn: State) => {
            if (conn !== null) {
                this.connection = conn;
            }
        });
    }

    public async ngAfterViewInit(): Promise<void> {
        this.navigator.getUserMedia =
            this.navigator.getUserMedia ||
            this.navigator.webkitGetUserMedia ||
            this.navigator.mozGetUserMedia ||
            this.navigator.msGetUserMedia;

        this.remoteStream = new MediaStream();
        this.updateVideo();

        this.store.select(selectCamStatus).subscribe(() => {
            this.updateVideo();
        });

        this.store.select(selectMicStatus).subscribe(() => {
            this.updateVideo();
        });
    }

    private async updateVideo(): Promise<void> {
        const video = this.webcam.nativeElement;
        const camStatus = await firstValueFrom(
            this.store.select(selectCamStatus),
        );
        const micStatus = await firstValueFrom(
            this.store.select(selectMicStatus),
        );
        if (micStatus || camStatus) {
            this.localStream = await this.navigator.mediaDevices.getUserMedia({
                video: camStatus,
                audio: micStatus,
            });
        } else {
            this.localStream = null;
        }
        video.srcObject = this.localStream;
        video.muted = true;

        this.localStream?.getTracks().forEach((track) => {
            if (this.localStream !== null) {
                this.connection?.addTrack(track, this.localStream);
            }
        });

        if (this.connection !== null) {
            this.connection.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    this.remoteStream.addTrack(track);
                });
            };
        }
    }

    public leave(): void {
        this.router.navigate(['/home']);
    }
}
