import { FC } from "react";
import { cx } from "styled-system/css";
import { useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { ButtonGroupProperties } from "./button-group.types";
import { buttonGroupStyles as s, DEFAULT_ACTIVE } from "./button-group.styles";

export const ButtonGroup: FC<ButtonGroupProperties> = (props) => {
  const { options, className, dataTestId, styleOverride, multiple, value, onChange } = props;
  const dark = useDarkMode();

  const isActive = (optValue: string) =>
    multiple ? (value as string[]).includes(optValue) : value === optValue;

  const handleClick = (optValue: string) => {
    if (multiple) {
      const current = value as string[];
      const next = current.includes(optValue)
        ? current.filter((v) => v !== optValue)
        : [...current, optValue];
      (onChange as (v: string[]) => void)(next);
    } else {
      (onChange as (v: string) => void)(optValue);
    }
  };

  const btnColor     = resolveColor(styleOverride?.btn?.color, dark);
  const btnBg        = resolveColor(styleOverride?.btn?.background, dark);
  const btnBorder    = resolveColor(styleOverride?.btn?.borderColor, dark);
  const activeColor  = resolveColor(styleOverride?.active?.color, dark);
  const activeBg     = resolveColor(styleOverride?.active?.background, dark);
  const activeBorder = resolveColor(styleOverride?.active?.borderColor, dark);

  const wrapperStyle = styleOverride?.gap ? { gap: styleOverride.gap } : undefined;

  const getButtonStyle = (active: boolean) => {
    if (active) {
      return {
        color: activeColor ?? DEFAULT_ACTIVE.color,
        backgroundColor: activeBg ?? DEFAULT_ACTIVE.backgroundColor,
        borderColor: activeBorder ?? DEFAULT_ACTIVE.borderColor,
      };
    }
    return {
      ...(btnColor  && { color: btnColor }),
      ...(btnBg     && { backgroundColor: btnBg }),
      ...(btnBorder && { borderColor: btnBorder }),
    };
  };

  return (
    <div data-testid={dataTestId} className={cx(s.wrapper, className)} style={wrapperStyle}>
      {options.map((opt) => {
        const active = isActive(opt.value);
        return (
          <button
            key={opt.value}
            className={s.btn}
            style={getButtonStyle(active)}
            onClick={() => handleClick(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
