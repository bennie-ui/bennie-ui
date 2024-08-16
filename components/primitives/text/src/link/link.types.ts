import type {
  ColorType,
  OpacityType,
  TargetType,
} from "@phoenix-ui/types/attributes";
import { AllMargins } from "packages/phoenix-ui/libraries/types/attributes/margin.types";
import { AllPaddings } from "packages/phoenix-ui/libraries/types/attributes/padding.types";
import {
  TextAlignmentType,
  TextDisplayType,
  TextOverflowType,
  TextSizeType,
  TextTagType,
} from "packages/phoenix-ui/libraries/types/texts";
import {
  DarkOverrides,
  ResponsiveComponentOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";
import { SyntheticEvent } from "react";

export interface LinkAttributes {
  target?: string;
  rel?: string;
  href?: string;
}

export interface LinkProperties {
  id?: string;
  align?: TextAlignmentType;
  children?: React.ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  display?: TextDisplayType;

  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  onClick?: (event: SyntheticEvent) => void;
  overrides?: ResponsiveComponentOverrides;
  overflow?: TextOverflowType;
  padding?: AllPaddings;
  tag?: TextTagType;

  href?: string;
  target?: TargetType;
}
