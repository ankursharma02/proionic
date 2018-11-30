import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PasswordDemoPage } from '../pages/password-demo/password-demo';
import { CompanyDemoPage } from '../pages/company-demo/company-demo';
import { FormsModule } from '@angular/forms';
import { UserDemoPage } from '../pages/user-demo/user-demo';
import { LoadingDemoPage } from '../pages/loading-demo/loading-demo';
import { Demo1Page } from '../pages/demo1/demo1';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PasswordDemoPage,
    CompanyDemoPage,
    UserDemoPage,
    LoadingDemoPage,
    Demo1Page
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PasswordDemoPage,
    CompanyDemoPage,
    UserDemoPage,
    LoadingDemoPage,
    Demo1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicModule
    ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
