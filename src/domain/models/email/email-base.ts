import { Dispatch, FormEvent, SetStateAction } from "react";
import { InputProps } from "../../../components/input";
import { IUser, IUserField } from "../../../contexts/user";
import { IEmail } from "./email";
import { IValidate } from "../../../services/validations/validation.interface";

interface IEmailProps {
    data: IUser;
    setData: Dispatch<SetStateAction<IUser>>;
    validation: IValidate;
}

export abstract class EmailBase implements IEmail {
    fieldName: string;
  fieldValues: IUserField;
  setData: Dispatch<SetStateAction<IUser>>;
  validation: IValidate;

  constructor(props: IEmailProps) {
    this.fieldName = 'email'
    this.fieldValues = props.data.email;
    this.setData = props.setData;
    this.validation = props.validation;
  }

  onChange(e: FormEvent<HTMLInputElement>): void {
    const value = e.currentTarget?.value || '';
    this.setData((old: IUser) => ({ ...old, [this.fieldName]: { value, message: "" } }));
  }

  onBlur(e: FormEvent<HTMLInputElement>): void {
    const value = e.currentTarget?.value || '';
    this.validate(value);
  }

  validate(value?: string): boolean {
    if (!value) {
      this.setMessage('E-mail is required')
      return false;
    }
    
    const normalizeValue = value.toLocaleLowerCase().trim();

    if (!this.validation.validate(normalizeValue)) {
      this.setMessage('invalid E-mail')
      return false;
    }

    return true;
  }

  setMessage(message: string) {
    this.setData((old: IUser) => ({ ...old, [this.fieldName]: { value: old.email.value, message } }));
  }

  props(): InputProps {
    return {
      label: "E-mail",
      name: this.fieldName,
      id: this.fieldName,
      type: "email",
      value: this.fieldValues.value,
      message: this.fieldValues.message,
      onChange: this.onChange.bind(this),
      onBlur: this.onBlur.bind(this),
    };
  }
}