import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceDetailPage } from './price-detail';

@NgModule({
  declarations: [
    PriceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceDetailPage),
  ],
})
export class PriceDetailPageModule {}
