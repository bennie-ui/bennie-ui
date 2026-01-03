import { css } from 'styled-system/css';

// Define all toast variant styles statically so Panda can extract them
export const toastVariants = {
  neutral: css({
    color: "white",
    backgroundColor: "slate.500",
  }),
  primary: css({
    color: "white",
    backgroundColor: "blue.500",
  }),
  secondary: css({
    color: "white",
    backgroundColor: "neutral.500",
  }),
  success: css({
    color: "white",
    backgroundColor: "emerald.500",
  }),
  danger: css({
    color: "white",
    backgroundColor: "red.500",
  }),
  warning: css({
    color: "white",
    backgroundColor: "yellow.500",
  }),
  info: css({
    color: "white",
    backgroundColor: "teal.500",
  }),
  light: css({
    color: "black",
    backgroundColor: "white",
  }),
  dark: css({
    color: "white",
    backgroundColor: "black",
  }),
};

// Define all toast size styles statically
export const toastSizes = {
  small: css({
    fontSize: "sm",
    paddingX: "3",
    paddingY: "2",
  }),
  medium: css({
    fontSize: "md",
    paddingX: "4",
    paddingY: "2",
  }),
  large: css({
    fontSize: "lg",
    paddingX: "4",
    paddingY: "3",
  }),
};

// Base toast styles
export const toastBase = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
