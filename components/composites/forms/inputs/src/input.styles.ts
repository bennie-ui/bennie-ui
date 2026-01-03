import { css } from 'styled-system/css';

// Base input styles
export const inputBase = css({
  width: "full",
  borderRadius: "md",
  paddingX: "3",
  paddingY: "2",
  fontSize: "sm",
  border: "1px solid",
  borderColor: "gray.300",
  outline: "none",
  _focus: {
    borderColor: "blue.500",
    boxShadow: "0 0 0 1px token(colors.blue.500)",
  },
  _disabled: {
    backgroundColor: "gray.100",
    cursor: "not-allowed",
    opacity: 0.6,
  },
});

// Input wrapper styles
export const inputWrapperBase = css({
  position: "relative",
  color: "black",
});

// Label styles
export const inputLabelBase = css({
  fontSize: "xs",
  color: "white",
  marginBottom: "2",
});

// Clear button styles
export const clearButtonBase = css({
  position: "absolute",
  right: "2",
  top: "8",
  padding: "0",
  backgroundColor: "transparent",
  color: "inherit",
  _hover: {
    backgroundColor: "transparent",
    opacity: 0.8,
  },
});
