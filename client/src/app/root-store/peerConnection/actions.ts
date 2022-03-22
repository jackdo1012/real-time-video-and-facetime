import { createAction, props } from '@ngrx/store';

export const setPeerConnection = createAction(
    '[Peer Connection] Set connection',
    props<{ connection: RTCPeerConnection }>(),
);
