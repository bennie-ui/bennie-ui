import type { ComponentProperties } from "@phoenix-ui/types/components";

import type {
  TextTagType,
  TextOverflowType,
  TextWeightType,
  TextAlignmentType,
  TextDisplayType,
} from "@phoenix-ui/types/texts";

export interface TextProperties extends ComponentProperties {
  tag?: TextTagType;
  overflow?: TextOverflowType;
  weight?: TextWeightType;
  align?: TextAlignmentType;
  display?: TextDisplayType;
}
