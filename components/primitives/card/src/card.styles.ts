import { css } from "styled-system/css";

export const cardStyles = {
  root: css({
    backgroundColor: { base: "white", _dark: "slate.900" },
    borderRadius: "xl",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: { base: "slate.200", _dark: "slate.800" },
    padding: "5",
    display: "flex",
    flexDirection: "column",
    gap: "3",
  }),
  header: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "sm",
    fontWeight: "600",
    color: { base: "slate.600", _dark: "slate.400" },
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  }),
  content: css({}),
  footer: css({}),
};
