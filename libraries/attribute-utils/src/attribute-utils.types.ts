import type { SyntheticEvent } from "react";
import type { TextSizeType } from "@phoenix-ui/types/texts";
import type { AllMargins, AllPaddings } from "@phoenix-ui/types/spacing";
import type { AllHeights, AllWidths } from "@phoenix-ui/types/sizing";
import type {
  ResponsiveComponentOverrides,
  ResponsiveSectionOverrides,
  DarkOverrides,
} from "@phoenix-ui/types/utilities";
import type {
  FlexType,
  ColorPropertyType,
  OpacityType,
} from "@phoenix-ui/types/attributes";
import { DATA_TEST_ID } from "@phoenix-ui/constants";

export interface BaseAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface BaseProperties {
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

  dark?: DarkOverrides;
}

export interface ComponentAttributes extends BaseAttributes {
  onClick?: (event: SyntheticEvent) => void;
}

export interface ComponentProperties extends BaseProperties {
  onClick?: (event: SyntheticEvent) => void;
  overrides?: ResponsiveComponentOverrides;
}

export interface SectionProprties extends BaseProperties {
  flex?: FlexType;
  overrides?: ResponsiveSectionOverrides;
}

