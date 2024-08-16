import { ReactNode } from "react";
import { ColorType } from "packages/phoenix-ui/libraries/types/attributes";
import {
  HeadingTagType,
  TextAlignmentType,
} from "packages/phoenix-ui/libraries/types/texts";

export interface HeadingProps {
  children: ReactNode;
  className?: string;
  align?: TextAlignmentType;
  tag?: HeadingTagType;
  colors?: ColorType;
  id?: string;
  dataTestId?: string;
}
