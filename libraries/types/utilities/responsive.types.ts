import type { AllMargins, AllPaddings } from "../spacing";
import type { DarkOverrides } from "../utilities/dark.types";
import type { TextSizeType, TextAlignmentType } from "../texts";
import type { OpacityType, FlexType, ColorPropertyType } from "../attributes";
import type { AllHeights, AllWidths } from "../sizing";

export type AllResponsiveBreakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

interface BaseBreakpointProperties {
  size?: TextSizeType;
  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;
  colors?: ColorPropertyType;
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
