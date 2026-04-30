import { FC } from "react";
import { Section } from "@bennie-ui/section";
import { Button } from "@bennie-ui/button";
import { toHex } from "@bennie-ui/types/colors";
import { useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { dialStyles } from "./dial-input.styles";
import { ShowStepButtons, TailwindColor, DialStyleOverride } from "./dial-input.types";

type DialInputActionsProps = {
  showStepButtons?: ShowStepButtons;
  isDirty: boolean;
  onSave: () => void;
  onDiscard: () => void;
  onAdjust: (delta: number) => void;
  color: TailwindColor;
  testId: string;
  styleOverride?: DialStyleOverride;
};

export const DialInputActions: FC<DialInputActionsProps> = ({
  showStepButtons, isDirty, onSave, onDiscard, onAdjust, color, testId, styleOverride,
}) => {
  const { steps, buttons } = dialStyles.actions;
  const hex = toHex(color);
  const dark = useDarkMode();

  const small = showStepButtons?.increments?.small ?? 0.1;
  const big = showStepButtons?.increments?.big ?? 1;
  const stepValues = showStepButtons
    ? small === big
      ? [-big, big]
      : [-big, -small, small, big]
    : [];

  const stepBg     = resolveColor(styleOverride?.stepButton?.background, dark);
  const stepColor  = resolveColor(styleOverride?.stepButton?.color, dark);
  const stepBorder = resolveColor(styleOverride?.stepButton?.borderColor, dark);
  const saveBg     = resolveColor(styleOverride?.saveButton?.background, dark);
  const saveColor  = resolveColor(styleOverride?.saveButton?.color, dark);

  const stepButtonStyle = (stepBg || stepColor || stepBorder)
    ? { ...(stepBg && { backgroundColor: stepBg }), ...(stepColor && { color: stepColor }), ...(stepBorder && { borderColor: stepBorder }) }
    : undefined;

  const saveButtonStyle = (saveBg || saveColor)
    ? { ...buttons.save.s(), ...(saveBg && { backgroundColor: saveBg }), ...(saveColor && { color: saveColor }) }
    : buttons.save.s();

  return (
    <>
      {showStepButtons && (
        <Section dataTestId={`${testId}-steps`} className={steps.row.cn}>
          {stepValues.map((step) => (
            <Button
              key={step}
              dataTestId={`${testId}-step-${step}`}
              variant="unstyled"
              className={steps.button.cn}
              style={stepButtonStyle}
              onClick={() => onAdjust(step)}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = saveBg ?? hex;
                e.currentTarget.style.borderColor = stepBorder ?? hex;
                e.currentTarget.style.outline = "none";
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = stepBg ?? "";
                e.currentTarget.style.borderColor = stepBorder ?? "";
              }}
            >
              {step > 0 ? `+${step}` : step}
            </Button>
          ))}
        </Section>
      )}

      {isDirty && (
        <Section dataTestId={`${testId}-actions`} className={buttons.row.cn}>
          <Button
            dataTestId={`${testId}-discard`}
            variant="unstyled"
            className={buttons.discard.cn}
            onClick={onDiscard}
            style={buttons.discard.s()}
          >
            Discard
          </Button>
          <Button
            dataTestId={`${testId}-save`}
            variant="unstyled"
            className={buttons.save.cn}
            onClick={onSave}
            style={saveButtonStyle}
          >
            Save
          </Button>
        </Section>
      )}
    </>
  );
};
