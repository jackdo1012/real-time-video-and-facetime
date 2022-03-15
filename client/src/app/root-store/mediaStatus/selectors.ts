import {
    createFeatureSelector,
    MemoizedSelector,
    createSelector,
} from '@ngrx/store';
import { State } from './state';

export const selectMediaStatus: MemoizedSelector<object, State> =
    createFeatureSelector<State>('mediaStatus');

export const selectCamStatus: MemoizedSelector<object, boolean> =
    createSelector(selectMediaStatus, (state) => state.cam);

export const selectMicStatus: MemoizedSelector<object, boolean> =
    createSelector(selectMediaStatus, (state) => state.mic);

export const selectScreenStatus: MemoizedSelector<object, boolean> =
    createSelector(selectMediaStatus, (state) => state.screen);
