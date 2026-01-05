import { ReactNode, SyntheticEvent } from "react";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export type ButtonVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export interface ButtonProperties {
  id?: string;
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}
