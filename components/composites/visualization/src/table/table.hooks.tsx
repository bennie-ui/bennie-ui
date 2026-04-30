import { FC, ReactNode, useRef, useMemo } from "react";
import { TableProvider } from "./context";
import { TableInner, TableCell as BaseTableCell } from "./table";
import { TableCellProps } from "./table.types";

export const useTable = <Data extends Record<string, unknown>>(data: Data[]) => {
  // Keep data always current without triggering component recreation
  const dataRef = useRef(data);
  dataRef.current = data;

  // Create the Table component once — stable reference, no remounts
  const Table = useMemo((): FC<{ children: ReactNode }> => {
    return ({ children }) => (
      <TableProvider data={dataRef.current}>
        <TableInner>{children}</TableInner>
      </TableProvider>
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const TableCell = BaseTableCell as FC<TableCellProps<Data>>;

  return { Table, TableCell };
};
