import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar} from "@ionic-native/status-bar";

import { FormPage } from '../pages/form/form';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {

  rootPage: any = FormPage;

  constructor(
    platform: Platform,
    public statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    })
  }
}
