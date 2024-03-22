import type { TextSizeType } from "@phoenix-ui/types/texts";
import type { AllMargins, AllPaddings } from "@phoenix-ui/types/spacing";
import type { AllHeights, AllWidths } from "@phoenix-ui/types/sizing";
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
  colors?: ColorPropertyType;
  opacity?: OpacityType;

  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;

  dark?: DarkOverrides;
}
