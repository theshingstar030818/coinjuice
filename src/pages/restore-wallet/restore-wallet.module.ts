import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestoreWalletPage } from './restore-wallet';

@NgModule({
  declarations: [
    RestoreWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(RestoreWalletPage),
  ],
})
export class RestoreWalletPageModule {}
