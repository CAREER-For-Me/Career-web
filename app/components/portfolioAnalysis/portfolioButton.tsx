import React from "react";

interface ButtonProps {
  label: string;
  type?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg"; // 버튼 크기
  outline?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // 아이콘 추가
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "default",
  size = "md",
  outline = false,
  onClick,
  className = "",
  icon,
}) => {
  const baseClass = "btn";
  const typeClass = type === "default" ? "" : `btn-${type}`;
  const sizeClass = `btn-${size}`;
  const outlineClass = outline ? "btn-outline" : "";

  return (
    <button
      className={`${baseClass} ${typeClass} ${sizeClass} ${outlineClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
