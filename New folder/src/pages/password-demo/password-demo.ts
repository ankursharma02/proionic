import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDemoPage } from '../user-demo/user-demo';
import { LoadingDemoPage } from '../loading-demo/loading-demo';
import { Demo1Page } from '../demo1/demo1';

/**
 * Generated class for the PasswordDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-demo',
  templateUrl: 'password-demo.html',
})
export class PasswordDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  name1:string;
name:string="123";
  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordDemoPage');

  }
demo1()
{
  if(this.name===this.name1)
  this.navCtrl.push(LoadingDemoPage);
  else
  alert("Invalid User name");

}
 

}
