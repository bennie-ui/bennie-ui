import { css } from "styled-system/css";
import { CSSProperties } from "react";

export const svgColorsDark = {
  trackStroke: "#0f172a",  // slate.900
  majorTickStroke: "#334155",  // slate.700
  minorTickStroke: "#1e293b",  // slate.800
  handleDotShadow: "#020617",  // slate.950
};

export const svgColorsLight = {
  trackStroke: "#e2e8f0",  // slate.200
  majorTickStroke: "#94a3b8",  // slate.400
  minorTickStroke: "#cbd5e1",  // slate.300
  handleDotShadow: "#f8fafc",  // slate.50
};

export const dialStyles = {
  root: (size: number) =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "fit-content",
      gap: size * 0.1,
    }),
  wrapper: {
    cn: css({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      cursor: "grab",
      touchAction: "none",
    }),
    s: (size: number): CSSProperties => ({ width: size, height: size }),
  },

  input: {
    svg: {
      cn: css({
        position: "absolute",
        top: "0",
        left: "0",
      }),
    },

    handle: {
      cn: css({
        position: "absolute",
        borderRadius: "full",
        outline: "none",
        cursor: "grab",
        touchAction: "none",
        transition: "box-shadow 0.15s",
      }),
      s: (strokeW: number, x: number, y: number): CSSProperties => ({
        width: strokeW * 2,
        height: strokeW * 2,
        left: x - strokeW,
        top: y - strokeW,
      }),
    },

    content: {
      cn: css({
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none",
        userSelect: "none",
      }),

      label: {
        cn: css({
          fontWeight: "600",
          color: "slate.500",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }),
        s: (size: number): CSSProperties => ({
          fontSize: size * 0.075,
          marginBottom: 2,
        }),
      },

      value: {
        cn: css({
          fontWeight: "700",
          lineHeight: "none",
          fontVariantNumeric: "tabular-nums",
          color: { base: "slate.900", _dark: "slate.100" },
        }),
        s: (size: number): CSSProperties => ({ fontSize: size * 0.225 }),
      },

      unit: {
        cn: css({
          color: "slate.500",
        }),
        s: (size: number): CSSProperties => ({
          fontSize: size * 0.0875,
          marginTop: 4,
        }),
      },
    },
  },

  actions: {
    steps: {
      row: {
        cn: css({
          display: "flex",
          gap: "2",
          marginTop: 4,
        }),
      },

      button: {
        cn: css({
          paddingX: "3",
          paddingY: "2",
          borderRadius: "lg",
          fontSize: "sm",
          fontWeight: "700",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: { base: "slate.300", _dark: "slate.800" },
          backgroundColor: { base: "slate.100", _dark: "slate.900" },
          color: { base: "slate.700", _dark: "slate.200" },
          cursor: "pointer",
          minWidth: "12",
          transition: "border-color 0.15s",
        }),
      },
    },

    buttons: {
      row: {
        cn: css({
          display: "flex",
          gap: "2",
          width: "full",
          marginTop: 4,
        }),
      },

      discard: {
        cn: css({
          padding: "2.5",
          borderRadius: "xl",
          fontSize: "sm",
          fontWeight: "700",
          borderWidth: "1px!",
          borderStyle: "solid!",
          borderColor: { base: "slate.300", _dark: "slate.800" },
          backgroundColor: "transparent",
          color: { base: "slate.600", _dark: "slate.500" },
          cursor: "pointer",
        }),
        s: (): CSSProperties => ({ flex: 1 }),
      },

      save: {
        cn: css({
          padding: "2.5",
          borderRadius: "xl",
          fontSize: "sm",
          fontWeight: "700",
          backgroundColor: "blue.500",
          color: "white",
          cursor: "pointer",
          _hover: { backgroundColor: "blue.600" },
        }),
        s: (): CSSProperties => ({ flex: 2 }),
      },
    },
  },
};
