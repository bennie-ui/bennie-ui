import { ReactNode, SyntheticEvent } from "react";
import { TargetType } from "@bennie-ui/types/attributes";

export interface LinkAttributes {
  target?: string;
  rel?: string;
  href?: string;
  id?: string;
  dataTestId?: string;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export interface LinkProperties {
  id?: string;
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  href?: string;
  target?: TargetType;
  onClick?: (event: SyntheticEvent) => void;
}
