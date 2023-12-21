import { Dispatch, FormEvent, SetStateAction } from "react";
import { IValidate } from "../../../services/validations/validation.interface";
import { IUser } from "../../../contexts/user";

interface INameProps {
  data: IUser;
  setData: Dispatch<SetStateAction<IUser>>;
  validation: IValidate;
}

export class Name {
  name: string;
  id: string;
  setData: Dispatch<SetStateAction<IUser>>;
  value?: string | undefined;
  validation: IValidate;

  constructor(props: INameProps) {
    this.name = "name";
    this.id = "name";
    this.setData = props.setData;
    this.value = props.data.name;
    this.validation = props.validation;
  }

  onChange(e: FormEvent<HTMLInputElement>) {
    this.setData((old: IUser) => ({ ...old, name: e.currentTarget.value }));
    this.validate(e.currentTarget.value);
  }

  onBlur(e: FormEvent<HTMLInputElement>) {
    this.validate(e.currentTarget.value);
  }

  validate(value: string) {
    this.validation.validate(value);
    if (value.toLocaleLowerCase() === "bob") {
      return false;
    }
    return true;
  }
}
