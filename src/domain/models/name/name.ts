import { Dispatch, FormEvent, SetStateAction } from "react";
import { IValidate } from "../../../services/validations/validation.interface";
import { IUser, IUserField } from "../../../contexts/user";
import { InputProps } from "../../../components/input";

interface INameProps {
  data: IUser;
  setData: Dispatch<SetStateAction<IUser>>;
  validation: IValidate;
}

export class Name {
  fieldName: string;
  fieldValues: IUserField;
  setData: Dispatch<SetStateAction<IUser>>;
  validation: IValidate;

  constructor(props: INameProps) {
    this.fieldName = "name";
    this.fieldValues = props.data.name;
    this.setData = props.setData;
    this.validation = props.validation;
  }

  onChange(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget?.value || "";
    this.setData((old: IUser) => ({
      ...old,
      [this.fieldName]: { value, message: "" },
    }));
  }

  onBlur(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget?.value || "";
    this.validate(value);
  }

  validate(value?: string) {
    if (!value) {
      this.setMessage("Name is required");
      return false;
    }

    const normalizeValue = value?.toLocaleLowerCase()?.trim();

    if (!this.validation.validate(normalizeValue) || normalizeValue === "bob") {
      this.setMessage("invalid Name");
      return false;
    }
    return true;
  }

  setMessage(message: string) {
    this.setData((old: IUser) => ({
      ...old,
      [this.fieldName]: { value: old.name.value, message },
    }));
  }

  props(): InputProps {
    return {
      label: "Name",
      name: this.fieldName,
      id: this.fieldName,
      type: "text",
      value: this.fieldValues.value,
      message: this.fieldValues.message,
      onChange: this.onChange.bind(this),
      onBlur: this.onBlur.bind(this),
    };
  }
}
