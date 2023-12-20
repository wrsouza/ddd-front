import {
  Dispatch,
  FormEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  SetStateAction,
} from "react";
import { IValidate } from "../../../services/validations/validation.interface";

interface IName extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

interface INameKey {
  name: string;
}

interface INameProps<T extends INameKey> {
  data: T;
  setData: Dispatch<SetStateAction<T>>;
  validation: IValidate;
}

export class Name<T extends INameKey> implements IName {
  name: string;
  id: string;
  setData: Dispatch<SetStateAction<T>>;
  defaultValue?: string | undefined;
  validation: IValidate;

  constructor(props: INameProps<T>) {
    this.name = "name";
    this.id = "name";
    this.setData = props.setData;
    this.defaultValue = props.data.name;
    this.validation = props.validation;
  }

  onChange(e: FormEvent<HTMLInputElement>) {
    this.setData((old) => ({ ...old, name: e.target.value }));
    this.validation.validate(e.target.value);
  }

  onFocus(e: FormEvent) {
    this.setData((old) => ({ ...old, name: e.target }));
    this.validation.validate(e.target);
  }

  onBlur(e: FormEvent) {
    this.validation.validate();
  }
}
