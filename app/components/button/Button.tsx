import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  btnLabel: string;
  variant?: "primary" | "secondary" | "accent";
  handleClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  btnLabel,
  variant = "primary",
  handleClick,
  className = "",
  icon,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`btn ${styles[variant]} ${className}`}
        onClick={handleClick}
      >
        {btnLabel} {icon}
      </button>{" "}
    </>
  );
};

export default Button;
