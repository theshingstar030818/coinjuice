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

  public tabs: any ;
  Stab: string = "Summary";
  public currency : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currency = navParams.get('coin');

    this.tabs = [
      {
        'name'  : 'Summary',
        'iconsvg'  : '../assets/images/wallet-nav/summary-ic.inline.svg'
      },
      {
        'name': 'Send',
        'iconsvg'  : '../assets/images/wallet-nav/send-ic.inline.svg'
      },
      {
        'name'  : 'Receive',
        'iconsvg'  : '../assets/images/wallet-nav/receive-ic.inline.svg'
      },
      {
        'name': 'Transactions',
        'iconsvg'  : '../assets/images/wallet-nav/transactions-ic.inline.svg'
      },
      {
        'name': 'Settings',
        'iconsvg'  : '../assets/images/wallet-nav/wallet-settings-2-ic.inline.svg'
      }
    ]
  }

  buy(coin){
    console.log('buy' + coin.name);
  }
  sell(coin){
    console.log('sell'+ coin.name);
  }

}
