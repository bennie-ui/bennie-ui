import type {
  FlexType,
  OpacityType,
  ColorPropertyType,
  RoundingType,
} from "@phoenix-ui/types/attributes";
import { AllHeights } from "@phoenix-ui/types/attributes/height.types";
import { AllMargins } from "@phoenix-ui/types/attributes/margin.types";
import { AllPaddings } from "@phoenix-ui/types/attributes/padding.types";
import { AllWidths } from "@phoenix-ui/types/attributes/width.types";
import { TextAlignmentType, TextSizeType } from "@phoenix-ui/types/texts";
import {
  DarkOverrides,
  ResponsiveComponentOverrides,
  ResponsiveSectionOverrides,
} from "@phoenix-ui/types/utilities";

export type ClassByResponsiveProps = {
  size?: TextSizeType;
  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;
  colors?: ColorPropertyType;
  opacity?: OpacityType;
  align?: TextAlignmentType;
  flex?: FlexType;
  dark?: DarkOverrides;
  overrides?: ResponsiveComponentOverrides | ResponsiveSectionOverrides;
  rounding?: RoundingType;
};
