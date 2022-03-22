import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { peerConnectionReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('peerConnection', peerConnectionReducer),
    ],
})
export class PeerConnectionModule {}
