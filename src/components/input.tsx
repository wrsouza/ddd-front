import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = (props: InputProps) => {
  const { label, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};
