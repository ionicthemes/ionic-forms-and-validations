import libphonenumber from 'google-libphonenumber';
import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const PHONE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PhoneValidator),
  multi: true
};

@Directive({
  selector: '[validatePhone][formControlName],[validatePhone][formControl],[validatePhone][ngModel]',
  providers: [ PHONE_VALIDATOR ]
})

export class PhoneValidator implements Validator {

  @Input() validatePhone: string;

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let phone = c.value;

    // control value
    let country = c.root.get(this.validatePhone);

    try{
      const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
      let phoneNumber = "" + phone + "",
          region = country.value.iso,
          number = phoneUtil.parse(phoneNumber, region),
          isValidNumber = phoneUtil.isValidNumber(number);
          if(!isValidNumber){
            return {validatePhone: false}
          }
    }catch(e){
      console.log(e);
      return { validatePhone: false };
    }
    return null
  }
}
