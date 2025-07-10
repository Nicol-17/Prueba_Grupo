import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
}

const ButtonVariantStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
};

export default function Button({
  children,
  type = "button",
  onClick,
  className,
  variant = "primary",
}: ButtonProps) {
  const buttonClassName = `
    ${ButtonVariantStyles[variant]} 
    ${className}
  `.trim();

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
