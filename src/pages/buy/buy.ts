import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  public coins: any ;
  Scoin: string = "Cardano";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coins = [
      {
        'name'  : 'Cardano',
        'symbol': 'ADA',
        'logo'  : 'cardano-logo.jpg'
      },
      {
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'logo'  : 'bitcoin-logo.png'
      }
    ]
  }


}
