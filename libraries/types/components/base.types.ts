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
} from "@phoenix-ui/types/attributes";

import { DATA_TEST_ID } from "@phoenix-ui/constants";

export interface BaseAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface BaseProperties {
  id?: string;
  flavor?: FlavorType;
  dataTestId?: string;

  children?: React.ReactNode;
  className?: string;

  size?: TextSizeType;
  align?: TextAlignmentType;
  colors?: ColorPropertyType;
  opacity?: OpacityType;

  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;

  dark?: DarkOverrides;
}
