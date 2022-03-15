import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mediaStatus } from './reducer';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('mediaState', mediaStatus)],
})
export class MediaStatusModule {}
