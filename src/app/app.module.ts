import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AbasPageModule } from '../pages/abas/abas.module';
import { Keyboard } from '@ionic-native/keyboard';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AbasPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
