import { css } from "styled-system/css";

export const pageStyles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "6",
  }),
  header: css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "3",
  }),
  titleGroup: css({
    display: "flex",
    flexDirection: "column",
    gap: "1",
  }),
  title: css({
    fontSize: "xl",
    fontWeight: "700",
    color: { base: "slate.900", _dark: "slate.100" },
  }),
  subtitle: css({
    fontSize: "sm",
    color: "slate.500",
  }),
  content: css({
    display: "flex",
    flexDirection: "column",
    gap: "5",
  }),
  footer: css({
    display: "flex",
    justifyContent: "center",
  }),
};
