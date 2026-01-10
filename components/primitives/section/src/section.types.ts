import { ReactNode, SyntheticEvent } from "react";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export interface SectionAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  style?: React.CSSProperties;
}

type SectionTagType = "div" | "pre" | "code" | "section" | "article" | "aside" | "nav" | "main" | "header" | "footer";

export interface SectionProperties {
  id?: string;
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  tag?: SectionTagType;
  onClick?: (event: SyntheticEvent) => void;
  style?: React.CSSProperties;
}
