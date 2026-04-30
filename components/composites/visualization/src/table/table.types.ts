import { ReactElement, ReactNode } from "react";

export type TableProperties = {
  children: ReactNode;
};

export type TableHeaderProps = {
  cells: ReactElement<TableCellProps>[];
};

export type TableBodyProps = {
  cells: ReactElement<TableCellProps>[];
};

export type TableCellProps<T = Record<string, unknown>> = {
  name: string;
  header?: string;
  children?: (row: T, index: number, rows: T[]) => ReactNode;
};
