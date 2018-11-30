import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Demo1Page } from '../demo1/demo1';

/**
 * Generated class for the LoadingDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading-demo',
  templateUrl: 'loading-demo.html',
})
export class LoadingDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) 
  {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingDemoPage');
//    setTimeout()
this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
    //  content: '...',
      duration: 4000,
      dismissOnPageChange: true
      
    }).present();
//  this.navCtrl.push(Demo1Page);
setTimeout(() => {
  this.navCtrl.push(Demo1Page);
}, 4000)
  }


}
