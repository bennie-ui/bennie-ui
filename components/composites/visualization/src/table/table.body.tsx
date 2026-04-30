import { FC, isValidElement } from "react";
import { useTableContext } from './context'
import { TableStyles } from './table.styles'
import { TableBodyProps, TableCellProps } from './table.types'

export const TableBody: FC<TableBodyProps> = ({ cells }) => {
  const { results } = useTableContext()

  return <tbody>
    {
      results?.map((result, idx) => (
        <tr key={idx}
          className={TableStyles.row}>
          {
            cells.map((cell, idx) => {
              if (isValidElement<TableCellProps>(cell)) {
                const { name } = cell.props
                return <td key={idx}>{result[name]}</td>
              }
              return null
            })
          }
        </tr>
      ))
    }
  </tbody>

}
TableBody.displayName = "TableBody"
