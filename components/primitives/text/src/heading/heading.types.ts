import { ReactNode, SyntheticEvent } from "react";
import { SystemStyleObject } from 'styled-system/types';
import { HeadingTagType } from "@bennie-ui/types/texts";

export interface HeadingProperties {
  children: ReactNode;
  className?: string;
  tag?: HeadingTagType;
  id?: string;
  dataTestId?: string;
  onClick?: (event: SyntheticEvent) => void;
}
