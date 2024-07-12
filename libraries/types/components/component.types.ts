import type { SyntheticEvent } from "react";
import type { ResponsiveComponentOverrides } from "@phoenix-ui/types/utilities";
import type { BaseAttributes, BaseProperties } from "./base.types";

export interface ComponentAttributes extends BaseAttributes {
  onClick?: (event: SyntheticEvent) => void;
}

export interface ComponentProperties extends BaseProperties {
  onClick?: (event: SyntheticEvent) => void;
  overrides?: ResponsiveComponentOverrides;
}
