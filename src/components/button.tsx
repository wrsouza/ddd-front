import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  const { label, ...rest } = props;
  return (
    <div>
      <button {...rest}>{label}</button>
    </div>
  );
};
