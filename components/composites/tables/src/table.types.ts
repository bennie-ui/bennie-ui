import { ReactElement, ReactNode } from "react";

export type TableConfig = {}

export type TableProperties = {
  children: ReactNode
}

export type TableHeaderProps = {
  cells: ReactElement<TableCellProps>[]
}

export type TableToolbarProps = {
}

export type TableBodyProps = {
  cells: ReactNode[]
}

export type TableCellProps = { name: string, header?: string }

