import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PriceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price-detail',
  templateUrl: 'price-detail.html',
})
export class PriceDetailPage {

  public currency;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currency = navParams.get('coin');
    
  }

  buy(coin){
    console.log('Buy '+ coin);
  }

  sell(coin){
    console.log('Sell '+ coin);
  }
}
