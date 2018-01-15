import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  public coins: any ;
  Scoin: string = "Cardano";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController
  ) {
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

  addAlert(coin) {
    let prompt = this.alertCtrl.create({
      title: 'Create Price Alert',
      message: "",
      inputs: [
        {
          name: 'title',
          placeholder: 'Price',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
