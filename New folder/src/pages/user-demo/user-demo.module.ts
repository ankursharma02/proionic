import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDemoPage } from './user-demo';

@NgModule({
  declarations: [
    UserDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDemoPage),
  ],
})
export class UserDemoPageModule {}
