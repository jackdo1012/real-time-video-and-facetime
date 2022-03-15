import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleCam } from '../../../root-store/mediaStatus/actions';

@Component({
    selector: 'meeting-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
    constructor(private store: Store) {}
    public ngOnInit() {}

    public toggleCam() {
        this.store.dispatch(toggleCam());
    }
}
