import { EmailBase } from "./email-base";
export class EmailCo extends EmailBase {
  validate(value?: string): boolean {
    if (!super.validate(value)) {
      return false;
    }

    const normalizeValue = value?.toLocaleLowerCase().trim();

    if (normalizeValue === "bob@domain.co") {
      this.setMessage('invalid E-mail')
      return false;
    }

    return true;
  }
}
