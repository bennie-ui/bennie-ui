import type { ColorOverride } from "@bennie-ui/types/theme";

export type ButtonGroupOption = {
  value: string;
  label: string;
};

export type ButtonGroupStyleOverride = {
  gap?: string;
  btn?: {
    color?: ColorOverride;
    background?: ColorOverride;
    borderColor?: ColorOverride;
  };
  active?: {
    color?: ColorOverride;
    background?: ColorOverride;
    borderColor?: ColorOverride;
  };
};

type BaseProps = {
  options: ButtonGroupOption[];
  styleOverride?: ButtonGroupStyleOverride;
  className?: string;
  dataTestId?: string;
};

type SingleProps = {
  multiple?: false;
  value: string;
  onChange: (value: string) => void;
};

type MultipleProps = {
  multiple: true;
  value: string[];
  onChange: (value: string[]) => void;
};

export type ButtonGroupProperties = BaseProps & (SingleProps | MultipleProps);
