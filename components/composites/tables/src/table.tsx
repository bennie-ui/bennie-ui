import { FC, ReactNode, Children, isValidElement, ReactElement } from "react";
import { Section } from '@bennie-ui/section'
import { TableStyles } from './table.styles'
import { TableHeader } from './table.header'
import { TableBody } from './table.body'
import { getChildrenByDisplayName } from './table.utils'
import { TableProperties, TableCellProps, TableToolbarProps } from './table.types'


export const TableCell: FC<TableCellProps> = () => <></>
TableCell.displayName = "TableCell"

export const Table: FC<TableProperties> = ({ children }) => {
  const TableToolbar = getChildrenByDisplayName(children, "TableToolbar");
  const TableCells = getChildrenByDisplayName(children, "TableCell") as ReactElement<TableCellProps>[];

  return <Section className={TableStyles.main_container}>
    {TableToolbar}
    <table className={TableStyles.table}>
      <TableHeader cells={TableCells} />
      <TableBody cells={TableCells} />
      <tfoot>
      </tfoot>
    </table>
  </Section>
}
Table.displayName = "Table"


