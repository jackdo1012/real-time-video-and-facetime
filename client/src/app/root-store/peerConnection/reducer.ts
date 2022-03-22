import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { setPeerConnection } from './actions';
import { initialState, State } from './state';

export const peerConnectionReducer: ActionReducer<State, Action> =
    createReducer(
        initialState,
        on(setPeerConnection, (_state, { connection }) => connection),
    );
