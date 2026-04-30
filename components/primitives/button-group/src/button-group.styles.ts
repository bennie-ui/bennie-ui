import { css } from "styled-system/css";

export const DEFAULT_ACTIVE = {
  color: "#3b82f6",
  backgroundColor: "rgba(59,130,246,0.1)",
  borderColor: "rgba(59,130,246,0.4)",
};

export const buttonGroupStyles = {
  wrapper: css({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
  }),
  btn: css({
    padding: "6px 16px",
    borderRadius: "lg",
    fontSize: "sm",
    fontWeight: "500",
    whiteSpace: "nowrap",
    border: "1px solid",
    borderColor: { base: "slate.300", _dark: "slate.700" },
    backgroundColor: { base: "slate.100", _dark: "slate.900" },
    color: { base: "slate.500", _dark: "slate.400" },
    cursor: "pointer",
    transition: "all 0.15s",
  }),
};
