import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  public currency : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currency = navParams.get('coin');
  }

  buy(coin){
    console.log('buy' + coin.name);
  }
  sell(coin){
    console.log('sell'+ coin.name);
  }

}
