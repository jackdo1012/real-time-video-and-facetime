import { NgModule } from '@angular/core';
import { MediaStatusModule } from './mediaStatus/mediaStatus.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [StoreModule.forRoot({}), MediaStatusModule],
})
export class RootReducerModule {}
