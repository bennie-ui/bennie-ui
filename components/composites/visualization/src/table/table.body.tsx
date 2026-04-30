import { FC, isValidElement } from "react";
import { useTableContext } from "./context";
import { TableStyles } from "./table.styles";
import { TableBodyProps, TableCellProps } from "./table.types";

export const TableBody: FC<TableBodyProps> = ({ cells }) => {
  const { results } = useTableContext();

  return (
    <tbody>
      {results.map((row, rowIndex) => (
        <tr key={rowIndex} className={TableStyles.row}>
          {cells.map((cell) => {
            if (!isValidElement<TableCellProps>(cell)) return null;
            const { name, children: renderFn } = cell.props;
            return (
              <td key={name} className={TableStyles.cell}>
                {renderFn ? renderFn(row, rowIndex, results) : row[name]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
TableBody.displayName = "TableBody";
