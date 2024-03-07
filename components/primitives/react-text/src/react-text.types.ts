import { ReactBaseComponentProperties } from "@phoenix-ui/types";
import type {
  TextTagType,
  TextOverflowType,
  TextWeightType,
  TextAlignmentType,
  TextDisplayType,
} from "@phoenix-ui/types/texts";

export interface TextProperties extends ReactBaseComponentProperties {
  tag?: TextTagType;
  overflow?: TextOverflowType;
  weight?: TextWeightType;
  align?: TextAlignmentType;
  display?: TextDisplayType;
}
