import { ReactNode } from "react";
import "./Button.css";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | "link";
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  destinity?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "secondary",
  destinity = "",
}: ButtonProps) {
  const buttonClassName = `button ${variant}  ${className}`.trim();

  if (type === "link") {
    return <Link
      href={destinity}
      className={buttonClassName}>
      {children}
    </Link>;
  } else {
    return (
      <button type={type}
        className={buttonClassName}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }


};
