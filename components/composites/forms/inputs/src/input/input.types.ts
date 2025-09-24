import { ChangeEvent, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
} from "@bennie-ui/types/attributes";

import { DATA_TEST_ID } from "@bennie-ui/constants";
import { TextSizeType } from "@bennie-ui/types/texts";
import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

export interface InputAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export type InputLabelPosition = 'top' | 'left' | 'embedded'
export type InputLabelProps = {
  text: string
  position?: InputLabelPosition
}
export type InputProperties = {
  id?: string;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  name: string;
  label?: string | InputLabelProps;
  value?: string;
  children?: ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  disabled?: boolean;
  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  padding?: AllPaddings;

  action?: ActionType;
  scale?: ScaleType;
  required?: boolean;
  rounding?: RoundingType;

  increment?: number;
  full_width?: boolean;
  with_clear_mark?: boolean;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type InputOption = {
  name: string;
  label?: string;
  value: string;
  selected: boolean;
};
