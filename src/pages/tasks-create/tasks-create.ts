import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { DynamoDB, User } from '../../providers/providers';
declare var AWS: any;

@Component({
  selector: 'page-tasks-create',
  templateUrl: 'tasks-create.html'
})
export class TasksCreatePage {

  isReadyToSave: boolean;
  item: any;
  isAndroid: boolean;
  private taskTable: string = 'ionic-mobile-hub-tasks';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public platform: Platform,
    public user: User,
    public db: DynamoDB,
  ) {
    this.isAndroid = platform.is('android');
    this.item = {
      'taskId': navParams.get('id'),
      'category': 'Todo'
    };
    this.isReadyToSave = true;
  }

  ionViewDidLoad() {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  makePayment(){
    this.navCtrl.push('PaymentPage',{});
  }

  done() { 
    this.item['description'] += ' (PKR)';
    this.db.getDocumentClient().put({
      'TableName': this.taskTable,
      'Item': this.item,
      'ConditionExpression': 'attribute_not_exists(id)'
    }, (err, data) => {
      if (err) { console.log(err); }
      this.viewCtrl.dismiss(this.item);
    });
  }
}
