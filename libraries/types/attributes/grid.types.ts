import { NumericMinRangeType } from "../attributes";

type GridTemplate = "none" | "subgrid";
type StartEndType = {
  span?: "auto" | "full" | NumericMinRangeType;
  start?: "auto" | NumericMinRangeType;
  end?: "auto" | NumericMinRangeType;
};

export type GridTypes = {
  order?: NumericMinRangeType;
  templates?: {
    columns?: GridTemplate | NumericMinRangeType;
    rows?: GridTemplate | NumericMinRangeType;
  };
  col?: StartEndType;
  row?: StartEndType;
};
