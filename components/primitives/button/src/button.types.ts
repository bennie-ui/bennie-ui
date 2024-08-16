import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
} from "@phoenix-ui/types/attributes";

import { DATA_TEST_ID } from "packages/phoenix-ui/libraries/constants/src";
import { TextSizeType } from "packages/phoenix-ui/libraries/types/texts";
import {
  DarkOverrides,
  ResponsiveComponentOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";
import { SyntheticEvent } from "react";

export interface ButtonAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export interface ButtonProperties {
  id?: string;
  children?: React.ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  padding?: AllPaddings;

  action?: ActionType;
  scale?: ScaleType;
  rounding?: RoundingType;
  isFullWidth?: boolean;
  disabled?: boolean;

  onClick?: (event: SyntheticEvent) => void;
  overrides?: ResponsiveComponentOverrides;
}
