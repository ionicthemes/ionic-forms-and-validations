import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormPage } from '../pages/form/form';
import { UserPage } from '../pages/user/user';
import { StatusBar} from "@ionic-native/status-bar";
import { BrowserModule } from '@angular/platform-browser';
import { ValidatorsModule } from '../validators/validators.module';

@NgModule({
  declarations: [
    MyApp,
    FormPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormPage,
    UserPage
  ],
  providers: [
    StatusBar
  ]
})
export class AppModule {}
