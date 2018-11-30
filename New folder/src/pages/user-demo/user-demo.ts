import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordDemoPage } from '../password-demo/password-demo';

/**
 * Generated class for the UserDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-demo',
  templateUrl: 'user-demo.html',
})
export class UserDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  name1:string;
  name:string="ank";
  errmsg:string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDemoPage');
  }
demo1()
{
  if(this.name===this.name1)
  this.navCtrl.push(PasswordDemoPage);
  else
  alert("Invalid User name");

}
}
