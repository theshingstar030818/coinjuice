import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PricePage } from './price';

@NgModule({
  declarations: [
    PricePage,
  ],
  imports: [
    IonicPageModule.forChild(PricePage),
  ],
})
export class PricePageModule {}
