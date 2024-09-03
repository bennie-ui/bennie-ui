import { DecimalType, NumericMinRangeType } from "./attribute.types";
export type PaddingValues =  DecimalType | NumericMinRangeType;

export interface AllPaddings {
  all?: PaddingValues;
  x?: PaddingValues;
  y?: PaddingValues;
  top?: PaddingValues;
  left?: PaddingValues;
  right?: PaddingValues;
  bottom?: PaddingValues;
}
