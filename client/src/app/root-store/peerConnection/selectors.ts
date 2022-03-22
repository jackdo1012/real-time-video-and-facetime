import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';

export const selectPeerConnection: MemoizedSelector<object, State> =
    createFeatureSelector<State>('peerConnection');
