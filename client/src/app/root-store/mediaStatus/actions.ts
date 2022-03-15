import { createAction, props } from '@ngrx/store';

export const setCam = createAction(
    '[Media Status] Set cam status',
    props<{ status: boolean }>(),
);

export const toggleCam = createAction('[Media Status] Toggle cam status');

export const turnOnCam = createAction('[Media Status] Turn on cam');

export const turnOffCam = createAction('[Media Status] Turn off cam');

export const setMic = createAction(
    '[Media Status] Set mic status',
    props<{ status: boolean }>(),
);

export const toggleMic = createAction('[Media Status] Toggle mic status');

export const turnOnMic = createAction('[Media Status] Turn on mic');

export const turnOffMic = createAction('[Media Status] Turn off mic');

export const setScreen = createAction(
    '[Media Status] Set screen status',
    props<{ status: boolean }>(),
);

export const toggleScreen = createAction('[Media Status] Toggle screen status');

export const turnOnScreen = createAction('[Media Status] Turn on screen');

export const turnOffScreen = createAction('[Media Status] Turn off screen');
