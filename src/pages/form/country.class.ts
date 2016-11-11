export class Country {
  iso: string;
  name: string;
  code: string;

  constructor (iso: string, name: string, code: string) {
    this.iso = iso;
    this.name = name;
    this.code = code;
  }

}
