import { DarkOverrides } from "../utilities/dark.types";
import { TextSizeType, TextAlignmentType } from "../texts";
import { AllWidths } from "../attributes/width.types";
import { AllHeights } from "../attributes/height.types";
import { AllMargins } from "../attributes/margin.types";
import { AllPaddings } from "../attributes/padding.types";
import { OpacityType, FlexType, ColorType, RoundingType } from "../attributes";

export type AllResponsiveBreakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

interface BaseBreakpointProperties {
  size?: TextSizeType;
  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;
  rounding?: RoundingType;
  colors?: ColorType;
  dark?: DarkOverrides;
  align?: TextAlignmentType;
}

interface ResponsiveComponentBreakpointProperties
  extends BaseBreakpointProperties {
  opacity?: OpacityType;
}

interface ResponsiveSectionBreakpointProperties
  extends BaseBreakpointProperties {
  flex?: FlexType;
}

export interface ResponsiveComponentOverrides {
  medium?: ResponsiveComponentBreakpointProperties;
  large?: ResponsiveComponentBreakpointProperties;
}

export interface ResponsiveSectionOverrides {
  medium?: ResponsiveSectionBreakpointProperties;
  large?: ResponsiveSectionBreakpointProperties;
}
