//import {
//type DecimalType,
//type PercentageType,
//} from "@phoenix-ui/types/attributes";
export type FlexDirectionType = "row" | "col" | "row-reverse" | "col-reverse";
export type FlexGrowType = "1" | "0";
export type FlexShrinkType = "1" | "0"; //"shrink" | "shrink-0";
//export type FlexBasisType = "px" | "auto" | "full";
export type FlexWrapType = "wrap" | "nowrap" | "reverse";

export type FlexJustifyContentType =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";
export type FlexAlignItemsType =
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "baseline";

export interface FlexType {
  alignItems?: FlexAlignItemsType;

  direction?: FlexDirectionType;
  grow?: FlexGrowType;

  justifyContent?: FlexJustifyContentType;
  wrap?: FlexWrapType;

  shrink?: FlexShrinkType;
  //basis?: number | DecimalType | PercentageType | FlexBasisType
}
