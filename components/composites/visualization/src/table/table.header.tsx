import { FC, isValidElement } from "react";
import { TableHeaderProps, TableCellProps } from "./table.types";
import { TableStyles } from "./table.styles";

export const TableHeader: FC<TableHeaderProps> = ({ cells }) => (
  <thead>
    <tr>
      {cells.map((cell) => {
        if (!isValidElement<TableCellProps>(cell)) return null;
        const { name, header } = cell.props;
        return (
          <th key={name} className={TableStyles.th}>
            {header ?? name}
          </th>
        );
      })}
    </tr>
  </thead>
);
TableHeader.displayName = "TableHeader";
