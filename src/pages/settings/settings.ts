import { Component } from '@angular/core';
import { App, Platform, ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { AccountPage } from '../account/account';
import { DocumentPage } from '../document/document';

import { User } from '../../providers/providers';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public aboutPage = AboutPage;
  public accountPage = AccountPage;
  public documentPage = DocumentPage;

  constructor(
    public user: User, 
    public app: App,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {  }

  addPin(){
    console.log('add Pin');
  }

  openShareMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Share',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook clicked');
          }
        },
        {
          text: 'Google Plus',
          icon: 'logo-googleplus',
          handler: () => {
            console.log('Google+ clicked');
          }
        },
        {
          text: 'LinkedIn',
          icon: 'logo-linkedin',
          handler: () => {
            console.log('LinkedIn clicked');
          }
        },
        {
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            console.log('Twitter clicked');
          }
        },
        {
          text: 'Whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('whatsapp clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  logout() {
    this.user.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }

}
