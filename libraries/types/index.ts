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
  GridType,
  AllWidths,
  AllHeights,
} from "@bennie-ui/types/attributes";

import {
  TextSizeType,
  TextAlignmentType,
  TextDisplayType,
  TextWeightType,
} from "@bennie-ui/types/texts";

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
  align?: TextAlignmentType;
  children?: ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  display?: TextDisplayType;
  flex?: FlexType;
  grid?: GridType;
  height?: AllHeights;
  margin?: AllMargins;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  padding?: AllPaddings;
  rounding?: RoundingType;
  scale?: ScaleType;
  size?: TextSizeType;
  weight?: TextWeightType;
  width?: AllWidths;

  onClick?: (event: SyntheticEvent) => void;
}

export type BuilderFunction = (
  properties: ComponentProperties,
) => string | undefined;
