import { DecimalType, NumericMinRangeType } from './attribute.types'
type MarginAutoType = 'auto' | 's-auto' | 'e-auto'
export type MarginValues = MarginAutoType | DecimalType | NumericMinRangeType

export interface AllMargins {
  all?: MarginValues
  x?: MarginValues
  y?: MarginValues
  top?: MarginValues
  left?: MarginValues
  right?: MarginValues 
  bottom?: MarginValues
}
