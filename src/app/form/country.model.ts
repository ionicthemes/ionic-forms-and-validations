import libphonenumber from 'google-libphonenumber';

export class Country {
  iso: string;
  name: string;
  code: string;
  sample_phone: string;
  phone_mask: Array<Object>;

  constructor (iso: string, name: string) {
    this.iso = iso;
    this.name = name;

    let phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(),
        PNF = libphonenumber.PhoneNumberFormat,
        PNT = libphonenumber.PhoneNumberType,
        country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE),
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        // We need to define how are we going to format the phone number
        // You can choose between many formats including:
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966

    this.sample_phone = example_number_formatted;
    this.code = "+" + country_example_number.getCountryCode();

    // Now let's transform the formatted example number into a valid text-mask
    // Inspired in text-mask example (https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask)
    this.phone_mask = this.getMaskFromString(example_number_formatted);
  }

  getMaskFromString(string: string): Array<Object> {
    let _string_chars = string.split(''),
        _digit_reg_exp = new RegExp(/\d/),
        _mask = _string_chars.map((char) => {
          // Replace any digit with a digit RegExp
          return (_digit_reg_exp.test(char)) ? _digit_reg_exp : char;
        });

    return _mask;
  }
}
