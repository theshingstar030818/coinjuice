import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Stripe } from '@ionic-native/stripe';

/*
  Generated class for the StripeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StripeProvider {

  constructor(
    public http: HttpClient,
    private stripe: Stripe,
  ) {
    console.log('Hello StripeProvider Provider');
  }
}
