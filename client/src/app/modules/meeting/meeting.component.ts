import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPeerConnection } from 'src/app/root-store/peerConnection/actions';

@Component({
    selector: 'meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit {
    constructor(private store: Store) {}

    private servers = {
        iceServers: [
            {
                urls: [
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302',
                ],
            },
        ],
        iceCandidatePoolSize: 10,
    };

    public async ngOnInit(): Promise<void> {
        this.store.dispatch(
            setPeerConnection({
                connection: new RTCPeerConnection(this.servers),
            }),
        );
    }
}
