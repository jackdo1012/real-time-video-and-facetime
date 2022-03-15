import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mediaStatusReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('mediaStatus', mediaStatusReducer),
    ],
})
export class MediaStatusModule {}
