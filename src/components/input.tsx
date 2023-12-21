import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message: string;
}

export const Input = (props: InputProps) => {
  const { label, message, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      <div>{message}</div>
    </div>
  );
};
