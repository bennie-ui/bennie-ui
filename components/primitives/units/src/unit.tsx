import { FC } from "react";
import { css } from "styled-system/css";

const styles = {
  row: css({
    display: "flex",
    alignItems: "baseline",
    gap: "1",
  }),
  number: css({
    fontSize: "2xl",
    fontWeight: "700",
    color: { base: "slate.900", _dark: "slate.100" },
    lineHeight: "1",
  }),
  unit: css({
    fontSize: "sm",
    color: "slate.500",
  }),
};

type UnitProperties = {
  value: string | number;
  unit: string;
  dataTestId?: string;
};

export const Unit: FC<UnitProperties> = ({ value, unit, dataTestId }) => (
  <div data-testid={dataTestId} className={styles.row}>
    <span className={styles.number}>{value}</span>
    <span className={styles.unit}>{unit}</span>
  </div>
);
