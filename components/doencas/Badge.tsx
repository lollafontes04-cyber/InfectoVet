import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "warning" | "success" | "danger";
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    warning: "bg-amber-100 text-amber-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`rounded-md px-3 py-1.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}