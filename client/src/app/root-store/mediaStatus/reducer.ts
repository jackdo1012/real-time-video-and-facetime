import {
    setCam,
    setMic,
    setScreen,
    toggleCam,
    toggleMic,
    toggleScreen,
    turnOffCam,
    turnOffMic,
    turnOffScreen,
    turnOnCam,
    turnOnMic,
    turnOnScreen,
} from './actions';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { State, initialState } from './state';

export const mediaStatus: ActionReducer<State, Action> = createReducer(
    initialState,
    on(setCam, (state, { status }) => ({
        ...state,
        cam: status,
    })),
    on(setMic, (state, { status }) => ({
        ...state,
        mic: status,
    })),
    on(setScreen, (state, { status }) => ({
        ...state,
        screen: status,
    })),
    on(toggleCam, (state) => ({ ...state, cam: !state.cam })),
    on(toggleMic, (state) => ({ ...state, mic: !state.mic })),
    on(toggleScreen, (state) => ({ ...state, screen: !state.screen })),
    on(turnOffCam, (state) => ({ ...state, cam: false })),
    on(turnOffMic, (state) => ({ ...state, mic: false })),
    on(turnOffScreen, (state) => ({ ...state, screen: false })),
    on(turnOnCam, (state) => ({ ...state, cam: true })),
    on(turnOnMic, (state) => ({ ...state, mic: true })),
    on(turnOnScreen, (state) => ({ ...state, screen: true })),
);
