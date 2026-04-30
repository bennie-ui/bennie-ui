import React, { ReactNode } from "react";

export type ButtonVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "unstyled";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonRounded = "sm" | "md" | "lg";

export interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  dataTestId?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded | boolean;
  fullWidth?: boolean;
}
