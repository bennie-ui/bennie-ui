import { FC, ReactElement, ReactNode } from "react";
import { TableProvider } from "./context";
import { TableStyles } from "./table.styles";
import { TableHeader } from "./table.header";
import { TableBody } from "./table.body";
import { getChildrenByDisplayName } from "./table.utils";
import { TableCellProps } from "./table.types";

export const TableCell: FC<TableCellProps> = () => null;
TableCell.displayName = "TableCell";

// Internal — renders the table markup, reads data from context
export const TableInner: FC<{ children: ReactNode }> = ({ children }) => {
  const cells = getChildrenByDisplayName(children, "TableCell") as ReactElement<TableCellProps>[];
  return (
    <table className={TableStyles.table}>
      <TableHeader cells={cells} />
      <TableBody cells={cells} />
    </table>
  );
};

// Public — standalone usage with an explicit data prop
export function Table<T extends Record<string, unknown>>({ data, children }: { data: T[]; children: ReactNode }) {
  return (
    <TableProvider data={data}>
      <TableInner>{children}</TableInner>
    </TableProvider>
  );
}
Table.displayName = "Table";
