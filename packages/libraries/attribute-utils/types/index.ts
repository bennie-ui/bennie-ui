import type {
    FlexType,
    OpacityType,
    ColorPropertyType
} from "@phoenix-ui/types/attributes";
import { AllMargins, AllPaddings } from "@phoenix-ui/types/spacing";
import { AllWidths, AllHeights } from "@phoenix-ui/types/sizing";
import { TextSizeType, TextAlignmentType } from "@phoenix-ui/types/texts";
import { ResponsiveOverrides, DarkOverrides } from "@phoenix-ui/types/utilities";

export type ActionMap = {
    neutral: ColorPropertyType;
    primary: ColorPropertyType;
    secondary: ColorPropertyType;
    success: ColorPropertyType;
    danger: ColorPropertyType;
    warning: ColorPropertyType;
    info: ColorPropertyType;
    light: ColorPropertyType;
    dark: ColorPropertyType;
  };

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
    overrides?: ResponsiveOverrides | undefined;
  };
