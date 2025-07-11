import { ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "secondary",
}: ButtonProps) {
  const buttonClassName = `button ${variant}  ${className}`.trim();

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
