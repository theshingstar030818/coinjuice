import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';
import { Subscription } from "rxjs/Subscription";
import { NativeStorage } from '@ionic-native/native-storage';
import { Stripe } from '@ionic-native/stripe';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  
  private billinginformationForm: FormGroup;
  private cvvForm: FormGroup;
  private loading;
  private ccNumber;
  private ccExpiryYear;
  private ccExpiryMonth;
  private ccSecurity;
  private tokenExpMonth;
  private tokenExpYear;
  public baseUri;
  private states;
  private expMonths
  private stateCode;
  private getStateCall: Subscription;
  private ccExpiry;
  private expYearsArray;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private formBuilder: FormBuilder, 
    private nativeStorage: NativeStorage,
    private stripe: Stripe, 
    private loadingCtrl: LoadingController,
    private http: Http,
    private alertCtrl: AlertController
  ) {
    this.billinginformationForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.pattern("^[a-zA-Z' \.\-]*"), Validators.required])],
      lastName: ['', Validators.compose([Validators.pattern("^[a-zA-Z' \.\-]*"),Validators.required])],
      streetAddress1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['',Validators.required],
      ccNumber: ['', Validators.compose([Validators.pattern("^[0-9]*$"), Validators.required])],
      });
    this.cvvForm = formBuilder.group({
        ccSecurity:['', Validators.compose([Validators.pattern("^[0-9]*$"), Validators.required])]
    });
    this.stateCode = [];
    this.expMonths = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    this.expYearsArray = ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027"];
  }

  ionViewDidEnter(){
    this.baseUri = JSON.parse(localStorage.getItem("baseUri"));        
  }

  ionViewDidLeave(){
    if(this.getStateCall){
      this.getStateCall.unsubscribe();
    }
  }

  nextStep(): void {
    // pk_test_iZCx6V3mANVHMZsTZS847FuQ // gauhar 
    this.stripe.validateCardNumber(this.billinginformationForm.value.ccNumber)
    .then(Result =>{
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();
      this.stripe.setPublishableKey('pk_test_aspft8VSjf2qCQYzU8KzRjVb');
       let expYear = +this.ccExpiryYear;
       let test = +this.ccExpiryMonth;
      let expMonth = +this.ccExpiryMonth
      let card = {
        number: this.billinginformationForm.value.ccNumber,
        expMonth: expMonth,
        expYear: expYear,
        cvc: this.cvvForm.value.ccSecurity
      };
      this.stripe.createCardToken(card)
        .then(token => {
          this.tokenExpMonth = String(token["card"]["exp_month"]);
          this.tokenExpYear = String(token["card"]["exp_year"]);
          this.nativeStorage.setItem('userBilling', {
            billingFirstName: this.billinginformationForm.value.firstName,
            billingLastName: this.billinginformationForm.value.lastName,            
            streetAddress: this.billinginformationForm.value.streetAddress1,
            city: this.billinginformationForm.value.city,
            state: this.billinginformationForm.value.state,
            postalCode: this.billinginformationForm.value.postalCode,
            cardLastFour: token["card"]["last4"],
            expMonth: this.tokenExpMonth,
            expYear: this.tokenExpYear,
            brand: token["card"]["brand"],
            stripeToken: token["id"]
          })
          .then(() => {
            this.loading.dismiss();            
            console.log('User Stored to Native Storage');
            this.navCtrl.push('SubscriptionPlanPage');
          },
          error =>{
          this.loading.dismiss();          
          console.error('Error storing user billing info', error)
          });
        })
        .catch(error => {
          this.loading.dismiss();
          this.showAlertMessage("ERROR!", error, ['Ok']);
        });
    })
    .catch(error => {
      // this.loading.dismiss();    

      this.showAlertMessage("ERROR!", "Invalid Credit Card Number", ['Ok']);
    });
    
  }

  showAlertMessage(title: string, subTitle: string, buttons: [string]): void {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
  }

}
