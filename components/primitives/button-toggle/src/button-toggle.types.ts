import type { IconFigure } from "@bennie-ui/icons";
import type { ColorOverride } from "@bennie-ui/types/theme";

export type ButtonToggleOption = {
  value: string;
  icon?: IconFigure;
  label?: string;
};

export type ButtonToggleStyleOverride = {
  wrapper?: {
    background?: ColorOverride;
    borderColor?: ColorOverride;
  };
  btn?: {
    color?: ColorOverride;
  };
  active?: {
    color?: ColorOverride;
    background?: ColorOverride;
  };
};

export type ButtonToggleProperties = {
  options: ButtonToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  dataTestId?: string;
  styleOverride?: ButtonToggleStyleOverride;
};
