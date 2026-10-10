import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  onClick,
  className = "",
  target,
  rel,
  type = "button",
  disabled = false,
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent whitespace-nowrap";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30",
    secondary:
      "border border-border text-text-primary hover:border-border-hover hover:bg-bg-card",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-card",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={styles}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
