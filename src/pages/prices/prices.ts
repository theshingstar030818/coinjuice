import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PriceDetailPage } from '../price-detail/price-detail';

/**
 * Generated class for the PricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html',
})
export class PricesPage { 

  coins = [];

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

  graphclick(coin){
    this.navCtrl.push(PriceDetailPage,{ coin:coin });
  }

}
