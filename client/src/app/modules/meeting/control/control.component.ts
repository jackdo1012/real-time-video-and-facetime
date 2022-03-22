import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    selectCamStatus,
    selectMicStatus,
    selectScreenStatus,
} from 'src/app/root-store/mediaStatus/selectors';
import { toggleCam, toggleMic } from 'src/app/root-store/mediaStatus/actions';
import { initialState } from 'src/app/root-store/mediaStatus/state';

@Component({
    selector: 'meeting-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
    public camStatus: boolean = initialState.cam;
    public micStatus: boolean = initialState.mic;
    public screenStatus: boolean = initialState.screen;
    public volume = 100;

    constructor(private readonly store: Store) {}

    public ngOnInit() {
        this.store.select(selectCamStatus).subscribe((status) => {
            this.camStatus = status;
        });
        this.store.select(selectMicStatus).subscribe((status) => {
            this.micStatus = status;
        });
        this.store.select(selectScreenStatus).subscribe((status) => {
            this.screenStatus = status;
        });
    }

    public toggleCam() {
        this.store.dispatch(toggleCam());
    }

    public toggleMic() {
        this.store.dispatch(toggleMic());
    }
}
