import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  FlexType,
  AllWidths,
  AllHeights,
} from "@phoenix-ui/types/attributes";

import {
  TextSizeType,
  TextAlignmentType,
  TextDisplayType,
} from "packages/phoenix-ui/libraries/types/texts";

import {
  DarkOverrides,
  ResponsiveComponentOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";

export interface ComponentAttributes {
  id?: string;
  className?: string;
  dataTestid?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export interface ComponentProperties {
  id?: string;

  action?: ActionType;
  align?: TextAlignmentType;

  children?: ReactNode;
  colors?: ColorType;
  className?: string;

  dataTestId?: string;
  dark?: DarkOverrides;
  display?: TextDisplayType;

  flex?: FlexType;

  height?: AllHeights;
  width?: AllWidths;
  margin?: AllMargins;

  scale?: ScaleType;
  size?: TextSizeType;
  opacity?: OpacityType;
  overrides?: ResponsiveComponentOverrides;
  padding?: AllPaddings;
  rounding?: RoundingType;

  onClick?: (event: SyntheticEvent) => void;
}

export type BuilderFunction = (
  properties: ComponentProperties,
) => string | undefined;
