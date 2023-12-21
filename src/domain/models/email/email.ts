import { FormEvent } from "react";
import { EmailCo } from "./email-co";
import { EmailPt } from "./email-pt";
import { InputProps } from "../../../components/input";

export interface IEmail {
  onChange(e: FormEvent<HTMLInputElement>): void;

  onBlur(e: FormEvent<HTMLInputElement>): void;

  validate(value: string): boolean;

  props(): InputProps;
}

export const Email = {
  co: EmailCo,
  pt: EmailPt,
};
