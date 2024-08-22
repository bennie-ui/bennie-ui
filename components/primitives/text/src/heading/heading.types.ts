import { ReactNode } from "react";
import { ColorType } from "@phoenix-ui/types/attributes";
import { HeadingTagType, TextAlignmentType } from "@phoenix-ui/types/texts";

export interface HeadingProps {
  children: ReactNode;
  className?: string;
  align?: TextAlignmentType;
  tag?: HeadingTagType;
  colors?: ColorType;
  id?: string;
  dataTestId?: string;
}
