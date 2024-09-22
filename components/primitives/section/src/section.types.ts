import { ReactNode } from "react";
import {
  RoundingType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  FlexType,
  GridType,
  AllWidths,
  AllHeights,
} from "@bennie-ui/types/attributes";

import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

import { TextSizeType, TextAlignmentType } from "@bennie-ui/types/texts";

import { DATA_TEST_ID } from "@bennie-ui/constants";

export interface SectionAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
}

type SectionTagType = "div" | "pre" | "code";
export interface SectionProperties {
  id?: string;
  align?: TextAlignmentType;
  children?: ReactNode;
  className?: string;
  colors?: ColorType;
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
  size?: TextSizeType;
  tag?: SectionTagType;
  width?: AllWidths;
}
