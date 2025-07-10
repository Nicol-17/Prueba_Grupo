import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  const inputClassName = `${className}`.trim();

  return <input className={inputClassName} {...props} />;
}
