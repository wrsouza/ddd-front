import { IValidate } from "./validation.interface";

export class NameValidation implements IValidate {
  readonly nameRegex: RegExp;

  constructor() {
    this.nameRegex = /^[a-zA-Z ].{4,}?$/i;
  }

  validate(value: string): boolean {
    if (!this.nameRegex.test(value)) {
      return false;
    }
    return true;
  }
}
