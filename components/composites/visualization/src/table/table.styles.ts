import { css } from "styled-system/css";

export const TableStyles = {
  table: css({
    width: "100%",
    borderCollapse: "collapse",
  }),
  th: css({
    textAlign: "left",
    padding: "8px 12px",
    fontSize: "xs",
    fontWeight: "500",
    color: "slate.500",
    borderBottom: "1px solid",
    borderColor: { base: "slate.200", _dark: "slate.800" },
  }),
  row: css({
    borderBottom: "1px solid",
    borderColor: { base: "slate.100", _dark: "slate.800" },
    transition: "background 0.1s",
    _hover: { backgroundColor: { base: "slate.50", _dark: "slate.800/40" } },
    _last: { borderBottom: "none" },
  }),
  cell: css({
    padding: "8px 12px",
    fontSize: "sm",
    color: { base: "slate.700", _dark: "slate.300" },
  }),
};
