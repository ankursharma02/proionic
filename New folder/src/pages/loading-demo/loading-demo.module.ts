import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingDemoPage } from './loading-demo';

@NgModule({
  declarations: [
    LoadingDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingDemoPage),
  ],
})
export class LoadingDemoPageModule {}
