import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConfirmPage } from '../pages/confirm/confirm';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { DocumentPage } from '../pages/document/document';
import { TabsPage } from '../pages/tabs/tabs';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksCreatePage } from '../pages/tasks-create/tasks-create';
import { PricesPage } from '../pages/prices/prices';
import { PriceDetailPage } from '../pages/price-detail/price-detail';
import { AlertsPage } from '../pages/alerts/alerts';
import { WalletPage } from '../pages/wallet/wallet';
import { CreateWalletPage } from '../pages/create-wallet/create-wallet';
import { RestoreWalletPage } from '../pages/restore-wallet/restore-wallet';
import { BuyPage } from '../pages/buy/buy';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { User } from '../providers/user';
import { Cognito } from '../providers/aws.cognito';
import { DynamoDB } from '../providers/aws.dynamodb';
import { StripProvider } from '../providers/strip/strip';
import { StripeProvider } from '../providers/stripe/stripe';
import { NativeStorage } from '@ionic-native/native-storage';
import { Stripe } from '@ionic-native/stripe';
import { AdaProvider } from '../providers/ada/ada';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmPage,
    SettingsPage,
    AboutPage,
    AccountPage,
    DocumentPage,
    TabsPage,
    TasksPage,
    TasksCreatePage,
    PricesPage,
    PriceDetailPage,
    AlertsPage,
    WalletPage,
    CreateWalletPage,
    RestoreWalletPage,
    BuyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmPage,
    SettingsPage,
    AboutPage,
    AccountPage,
    DocumentPage,
    TabsPage,
    TasksPage,
    TasksCreatePage,
    PricesPage,
    PriceDetailPage,
    AlertsPage,
    WalletPage,
    CreateWalletPage,
    RestoreWalletPage,
    BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    User,
    Cognito,
    DynamoDB,
    StripProvider,
    StripeProvider,
    NativeStorage,
    Stripe,
    AdaProvider
  ]
})
export class AppModule {}

declare var AWS;
AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';
