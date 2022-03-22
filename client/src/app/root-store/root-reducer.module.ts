import { NgModule } from '@angular/core';
import { MediaStatusModule } from './mediaStatus/mediaStatus.module';
import { StoreModule } from '@ngrx/store';
import { PeerConnectionModule } from './peerConnection/connection.module';

@NgModule({
    imports: [StoreModule.forRoot({}), MediaStatusModule, PeerConnectionModule],
})
export class RootReducerModule {}
