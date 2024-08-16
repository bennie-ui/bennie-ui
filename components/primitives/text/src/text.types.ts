import { SyntheticEvent } from "react";
import type {
  TextTagType,
  TextOverflowType,
  TextWeightType,
  TextAlignmentType,
  TextDisplayType,
  TextSizeType,
} from "@phoenix-ui/types/texts";
import {
  ColorType,
  OpacityType,
} from "packages/phoenix-ui/libraries/types/attributes";
import { AllMargins } from "packages/phoenix-ui/libraries/types/attributes/margin.types";
import { AllPaddings } from "packages/phoenix-ui/libraries/types/attributes/padding.types";
import {
  DarkOverrides,
  ResponsiveComponentOverrides,
} from "packages/phoenix-ui/libraries/types/utilities";

export type TextAttributes = {
  id?: string;
  dataTestId?: string;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
};

export type TextProperties = {
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
  weight?: TextWeightType;
};
