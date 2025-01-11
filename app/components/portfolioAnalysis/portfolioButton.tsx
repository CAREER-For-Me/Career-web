import React from "react";

interface ButtonProps {
  label: string;
  type?: "default" | "primary" | "secondary" | "accent"; // 버튼 타입
  size?: "sm" | "md" | "lg"; // 버튼 크기
  outline?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // 아이콘 추가
  disabled?: boolean; // 비활성화 옵션 추가
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "primary", // 기본값을 'primary'로 설정
  size = "md",
  outline = false,
  onClick,
  className = "",
  icon,
  disabled = false, // 비활성화 상태 관리
}) => {
  // 기본 버튼 클래스
  const baseClass = "btn";

  // 버튼 타입에 따른 클래스
  const typeClass = type === "default" ? "" : `btn-${type}`;

  // 버튼 크기에 따른 클래스
  const sizeClass = `btn-${size}`;

  // 아웃라인 옵션에 따른 클래스
  const outlineClass = outline ? "btn-outline" : "";

  // 버튼 비활성화 조건에 따른 클래스
  const disabledClass = disabled ? "btn-disabled" : "";

  return (
    <button
      className={`${baseClass} ${typeClass} ${sizeClass} ${outlineClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="icon-right mr-2">{icon}</span>}{" "}
      {/* 아이콘 위치 조정 */}
      {label}
    </button>
  );
};

export default Button;
