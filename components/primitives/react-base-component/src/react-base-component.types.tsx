import type { SyntheticEvent } from "react";
import type { TextSizeType } from "@phoenix-ui/types/texts";
import type { AllMargins, AllPaddings } from "@phoenix-ui/types/spacing";
import type { AllHeights, AllWidths } from "@phoenix-ui/types/sizing";
import type { ResponsiveOverrides, DarkOverrides } from "@phoenix-ui/types/utilities";
import type { FlexType, ColorPropertyType, OpacityType } from "@phoenix-ui/types/attributes";
import { DATA_TEST_ID } from "@phoenix-ui/constants";

export interface ReactBaseComponentAttributes {
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface ReactBaseComponentProperties {
  id?: string;
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

  flex?: FlexType;
  dark?: DarkOverrides;
  overrides?: ResponsiveOverrides;
  onClick?: (event: SyntheticEvent) => void;
}
