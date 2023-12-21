import { IValidate } from "./validation.interface";

export class EmailValidation implements IValidate {
  readonly emailRegex: RegExp;

  constructor() {
    this.emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
  }

  validate(value: string): boolean {
    if (!this.emailRegex.test(value)) {
      return false;
    }
    return true;
  }
}
