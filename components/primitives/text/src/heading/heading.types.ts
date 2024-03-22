import { ColorPropertyType } from "packages/phoenix/libraries/types/attributes";
import {
  HeadingTagType,
  TextAlignmentType,
} from "packages/phoenix/libraries/types/texts";

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: TextAlignmentType;
  tag?: HeadingTagType;
  colors?: ColorPropertyType;
  id?: string;
  dataTestId?: string;
}
