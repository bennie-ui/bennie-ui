import { FC } from "react";
import { cx } from "styled-system/css";
import { OutlineIcon } from "@bennie-ui/icons";
import { useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { ButtonToggleProperties } from "./button-toggle.types";
import { buttonToggleStyles as s, DEFAULT_ACTIVE } from "./button-toggle.styles";

export const ButtonToggle: FC<ButtonToggleProperties> = ({
  options,
  value,
  onChange,
  className,
  dataTestId,
  styleOverride,
}) => {
  const dark = useDarkMode();
  const defaults = dark ? DEFAULT_ACTIVE.dark : DEFAULT_ACTIVE.base;

  const wrapperStyle = {
    ...(resolveColor(styleOverride?.wrapper?.background, dark) && { backgroundColor: resolveColor(styleOverride?.wrapper?.background, dark) }),
    ...(resolveColor(styleOverride?.wrapper?.borderColor, dark) && { borderColor: resolveColor(styleOverride?.wrapper?.borderColor, dark) }),
  };

  const getButtonStyle = (isActive: boolean) => {
    if (isActive) {
      return {
        color: resolveColor(styleOverride?.active?.color, dark) ?? defaults.color,
        backgroundColor: resolveColor(styleOverride?.active?.background, dark) ?? defaults.backgroundColor,
      };
    }
    const btnColor = resolveColor(styleOverride?.btn?.color, dark);
    return btnColor ? { color: btnColor } : {};
  };

  return (
    <div data-testid={dataTestId} className={cx(s.wrapper, className)} style={wrapperStyle}>
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            className={cx(s.btn, isActive && s.active)}
            style={getButtonStyle(isActive)}
            onClick={() => onChange(opt.value)}
          >
            {opt.icon && <OutlineIcon figure={opt.icon} className={s.icon} />}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
