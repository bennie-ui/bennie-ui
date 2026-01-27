import { FC, isValidElement } from "react";
import { css } from 'styled-system/css';
import { TableHeaderProps, TableCellProps } from './table.types'

export const TableHeader: FC<TableHeaderProps> = ({ cells }) => {
  return <thead>
    <tr>
      {
        cells.map((cell, idx) => {
          if (isValidElement<TableCellProps>(cell)) {
            const { name, header } = cell.props
            return <th key={idx}
              className={css({ textAlign: "left" })}>
              {header || name}
            </th>
          }
          return null
        })
      }
    </tr>
  </thead>
}
TableHeader.displayName = "TableHeader"
