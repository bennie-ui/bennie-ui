import { FC } from "react";
import { css } from "styled-system/css";

const styles = {
  up: css({
    fontSize: "xs",
    fontWeight: "600",
    color: "green.500",
    display: "flex",
    alignItems: "center",
    gap: "0.5",
  }),
  down: css({
    fontSize: "xs",
    fontWeight: "600",
    color: "red.500",
    display: "flex",
    alignItems: "center",
    gap: "0.5",
  }),
};

type TickerProperties = {
  value: number;
  dataTestId?: string;
};

export const Ticker: FC<TickerProperties> = ({ value, dataTestId }) => (
  <span data-testid={dataTestId} className={value < 0 ? styles.down : styles.up}>
    {value > 0 ? "▲" : "▼"} {Math.abs(value)}%
  </span>
);
