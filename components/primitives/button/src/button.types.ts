import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
} from "@phoenix-ui/types/attributes";

import { DATA_TEST_ID } from "@phoenix-ui/constants";
import { TextSizeType } from "@phoenix-ui/types/texts";
import {
  DarkOverrides,
  ResponsiveOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";

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
  rounding?: RoundingType;
  isFullWidth?: boolean;

  onClick?: (event: SyntheticEvent) => void;
}
