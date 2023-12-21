import { EmailBase } from "./email-base";
export class EmailPt extends EmailBase {
  validate(value?: string): boolean {
    if (!super.validate(value)) {
      return false;
    }

    const normalizeValue = value?.toLocaleLowerCase().trim();

    if (normalizeValue === "bob@domain.pt") {
      this.setMessage('invalid E-mail')
      return false;
    }

    return true;
  }
}
