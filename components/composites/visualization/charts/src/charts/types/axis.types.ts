export type ElementType = "line";
export type ChartValue<T> = T | null | undefined;

export declare type AxisOptionsBase = {
  type?: ElementType;
};

export declare type AxisLinearOptions<TDatum> = AxisOptionsBase & {
  getValue: (datum: TDatum) => ChartValue<number | string>;
  max?: number;
  min?: number;
};

export declare type AxisOptions<TDatum> = AxisLinearOptions<TDatum>;
