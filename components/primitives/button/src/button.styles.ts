import { css } from "styled-system/css";

// Define all button variant styles statically so Panda can extract them
export const buttonVariants = {
  neutral: css({
    color: "white",
    backgroundColor: "slate.500",
    _hover: { backgroundColor: "slate.600" },
  }),
  primary: css({
    color: "white",
    backgroundColor: "blue.500",
    _hover: { backgroundColor: "blue.600" },
  }),
  secondary: css({
    color: "white",
    backgroundColor: "neutral.500",
    _hover: { backgroundColor: "neutral.600" },
  }),
  success: css({
    color: "white",
    backgroundColor: "emerald.500",
    _hover: { backgroundColor: "emerald.600" },
  }),
  danger: css({
    color: "white",
    backgroundColor: "red.500",
    _hover: { backgroundColor: "red.600" },
  }),
  warning: css({
    color: "white",
    backgroundColor: "yellow.500",
    _hover: { backgroundColor: "yellow.600" },
  }),
  info: css({
    color: "white",
    backgroundColor: "teal.500",
    _hover: { backgroundColor: "teal.600" },
  }),
  light: css({
    color: "black",
    backgroundColor: "white",
    _hover: { backgroundColor: "gray.100" },
  }),
  dark: css({
    color: "white",
    backgroundColor: "black",
    _hover: { backgroundColor: "gray.900" },
  }),
};

// Define all button size styles statically
export const buttonSizes = {
  small: css({
    padding: "2",
  }),
  medium: css({
    paddingX: "4",
    paddingY: "2",
  }),
  large: css({
    paddingX: "16",
    paddingY: "3",
  }),
};

// Define all button rounded styles statically
export const buttonRounded = {
  sm: css({
    rounded: "sm",
  }),
  md: css({
    rounded: "md",
  }),
  lg: css({
    rounded: "lg",
  }),
};

// Base button styles - reset baseline.css button styles
export const buttonBase = css({
  cursor: "pointer",
  border: "none",
  outline: "none",
  backgroundImage: "none",
  WebkitAppearance: "none",
  appearance: "none",
});
