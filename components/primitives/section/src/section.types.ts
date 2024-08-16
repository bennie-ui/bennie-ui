import { DATA_TEST_ID } from "packages/phoenix-ui/libraries/constants/src";
import {
  ColorType,
  FlexType,
  OpacityType,
  RoundingType,
} from "packages/phoenix-ui/libraries/types/attributes";
import { AllHeights } from "packages/phoenix-ui/libraries/types/attributes/height.types";
import { AllMargins } from "packages/phoenix-ui/libraries/types/attributes/margin.types";
import { AllPaddings } from "packages/phoenix-ui/libraries/types/attributes/padding.types";
import { AllWidths } from "packages/phoenix-ui/libraries/types/attributes/width.types";
import {
  TextAlignmentType,
  TextSizeType,
} from "packages/phoenix-ui/libraries/types/texts";
import {
  DarkOverrides,
  ResponsiveSectionOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";

export interface SectionAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
}

type SectionTagType = "div" | "pre" | "code";
export interface SectionProperties {
  flex?: FlexType;

  align?: TextAlignmentType;
  rounding?: RoundingType;
  height?: AllHeights;
  width?: AllWidths;
  overrides?: ResponsiveSectionOverrides;

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

  dangerouslySetInnerHTML?: { __html: string };
  tag?: SectionTagType;
}
