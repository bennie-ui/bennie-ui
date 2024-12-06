
import { DecimalType, PercentageHalvesType, PercentageThirdsType, PercentageFourthsType, NumericMinRangeType, NumericMediumnRangeType  } from "./attribute.types";

export type PositionNumericTypes  = NumericMinRangeType | NumericMediumnRangeType
export type PositionPerentageTypes =  PercentageHalvesType | PercentageThirdsType | PercentageFourthsType 
export type PositionValues = 'px' | 'auto' | 'full' | DecimalType | PositionNumericTypes | PositionPerentageTypes ;

export interface AllPositions {
  all?: PositionValues;
  x?: PositionValues;
  y?: PositionValues;
  top?: PositionValues;
  left?: PositionValues;
  right?: PositionValues;
  bottom?: PositionValues;
}
