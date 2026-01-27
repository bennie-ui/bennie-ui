import { TableProvider } from './context'
import { TableToolbar } from './table.toolbar'
import { Table as BaseTable, TableCell } from './table'

export const useTable = <Data,>(data: Data) => {
  const Table = ({ children }) => <TableProvider data={data as any[]}>
    <BaseTable>{children}</BaseTable>
  </TableProvider>

  return {
    Table,
    TableToolbar,
    TableCell
  };
}
