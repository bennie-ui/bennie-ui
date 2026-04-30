import { TailwindColor } from "@bennie-ui/types/colors";
import type { ColorOverride } from "@bennie-ui/types/theme";

export type { TailwindColor };

export type ShowStepButtons = {
  increments?: {
    small?: number;
    big?: number;
  };
};

export type DialStyleOverride = {
  track?: ColorOverride;
  ticks?: {
    major?: ColorOverride;
    minor?: ColorOverride;
  };
  handleShadow?: ColorOverride;
  label?: {
    color?: ColorOverride;
  };
  value?: {
    color?: ColorOverride;
  };
  unit?: {
    color?: ColorOverride;
  };
  stepButton?: {
    background?: ColorOverride;
    color?: ColorOverride;
    borderColor?: ColorOverride;
  };
  saveButton?: {
    background?: ColorOverride;
    color?: ColorOverride;
  };
};

export type DialInputProperties = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  label?: string;
  color?: TailwindColor;
  size?: number;
  showStepButtons?: ShowStepButtons;
  styleOverride?: DialStyleOverride;
  testId?: string;
};
