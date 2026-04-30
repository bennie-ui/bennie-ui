import { css } from "styled-system/css";

export const DEFAULT_ACTIVE = {
  base: { color: "#0f172a", backgroundColor: "#ffffff" },
  dark: { color: "#f1f5f9", backgroundColor: "#1e293b" },
};

export const buttonToggleStyles = {
  wrapper: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    borderRadius: "lg",
    padding: "2px",
    border: "1px solid",
    borderColor: { base: "slate.200", _dark: "slate.800" },
    backgroundColor: { base: "slate.100", _dark: "slate.900" },
  }),
  btn: css({
    display: "flex",
    alignItems: "center",
    gap: "1",
    paddingX: "3",
    paddingY: "1.5",
    borderRadius: "md",
    fontSize: "xs",
    fontWeight: "500",
    color: { base: "slate.500", _dark: "slate.400" },
    cursor: "pointer",
    transition: "all 0.15s",
    border: "none",
    background: "transparent",
    _hover: { color: { base: "slate.900", _dark: "slate.100" } },
  }),
  active: css({
    boxShadow: "sm",
  }),
  icon: css({
    width: "14px",
    height: "14px",
  }),
};
