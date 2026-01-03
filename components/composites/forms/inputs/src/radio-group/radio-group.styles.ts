import { css } from 'styled-system/css';

// Radio group wrapper styles
export const radioGroupBase = css({
  display: "flex",
  gap: "4",
});

export const radioGroupRow = css({
  flexDirection: "row",
  justifyContent: "space-around",
});

export const radioGroupCol = css({
  flexDirection: "column",
});

// Radio item styles
export const radioItemBase = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  _hover: {
    opacity: 0.8,
  },
});

export const radioInputBase = css({
  width: "5",
  height: "5",
  cursor: "pointer",
  accentColor: "blue.500",
});

export const radioLabelBase = css({
  marginLeft: "2",
  cursor: "pointer",
  userSelect: "none",
});
