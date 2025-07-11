import { ComponentProps } from "react";
import "./input.css"; 

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  const inputClassName = `${className}`.trim();

  return <input className="input" {...props} />;
}
