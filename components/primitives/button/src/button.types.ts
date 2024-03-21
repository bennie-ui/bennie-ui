import type {
  ScaleType,
  RoundingType,
  ActionType,
} from "@phoenix-ui/types/attributes";

import type {
  ComponentAttributes,
  ComponentProperties,
} from "@phoenix-ui/attribute-utils";

export interface ButtonAttributes extends ComponentAttributes {
  disabled?: boolean;
}

export interface ButtonProperties extends ComponentProperties {
  action?: ActionType;
  scale?: ScaleType;
  rounded?: RoundingType;
  isFullWidth?: boolean;
  disabled?: boolean;
}
