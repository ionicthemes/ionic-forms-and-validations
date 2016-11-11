import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormPage } from '../pages/form/form';
import { UserPage } from '../pages/user/user';
import { EqualValidator, PhoneValidator, CountryValidator } from '../validators';

@NgModule({
  declarations: [
    MyApp,
    FormPage,
    UserPage,
    EqualValidator,
    PhoneValidator,
    CountryValidator
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormPage,
    UserPage
  ],
  providers: []
})
export class AppModule {}
