import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  BorderTypes,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  FlexType,
  GridType,
  AllWidths,
  AllHeights,
} from "@bennie-ui/types/attributes";

import { TextTypes } from "@bennie-ui/types/texts";

import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

export interface ComponentAttributes {
  id?: string;
  className?: string;
  dataTestid?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export interface ComponentProperties {
  id?: string;

  action?: ActionType;
  border?: BorderTypes;
  children?: ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  flex?: FlexType;
  grid?: GridType;
  height?: AllHeights;
  margin?: AllMargins;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  padding?: AllPaddings;
  rounding?: RoundingType;
  scale?: ScaleType;
  text?: TextTypes;
  width?: AllWidths;

  onClick?: (event: SyntheticEvent) => void;
}

export type BuilderFunction = (
  properties: ComponentProperties,
) => string | undefined;
