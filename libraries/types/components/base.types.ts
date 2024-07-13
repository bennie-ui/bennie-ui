import type { TextSizeType, TextAlignmentType } from "@phoenix-ui/types/texts";
import type { AllMargins } from "@phoenix-ui/types/attributes/margin.types";
import type { AllPaddings } from "@phoenix-ui/types/attributes/padding.types";
import type { AllHeights } from "@phoenix-ui/types/attributes/height.types";
import type { AllWidths } from "@phoenix-ui/types/attributes/width.types";

import type { DarkOverrides } from "@phoenix-ui/types/utilities";

import type {
  ColorPropertyType,
  OpacityType,
  FlavorType,
  RoundingType,
} from "@phoenix-ui/types/attributes";

import { DATA_TEST_ID } from "@phoenix-ui/constants";

export interface BaseAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface BaseProperties {
  id?: string;
  align?: TextAlignmentType;
  children?: React.ReactNode;
  colors?: ColorPropertyType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  flavor?: FlavorType;
  height?: AllHeights;
  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  padding?: AllPaddings;
  rounding?: RoundingType;
  width?: AllWidths;
}
