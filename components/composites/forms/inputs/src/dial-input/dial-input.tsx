import { FC, KeyboardEvent, useRef, useState } from "react";
import { Section } from "@bennie-ui/section";
import { DialInputProperties } from "./dial-input.types";
import { dialStyles } from "./dial-input.styles";
import { DialInputCircle } from "./dial-input-circle";
import { DialInputContent } from "./dial-input-content";
import { DialInputActions } from "./dial-input-actions";

const KEYBOARD_STEP = 0.1;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const round1 = (v: number) => Math.round(v * 10) / 10;

export const DialInput: FC<DialInputProperties> = ({
  value: initialValue,
  onChange,
  max = 200,
  min = 0,
  unit,
  label,
  color = "blue.500" as const,
  size = 160,
  showStepButtons,
  styleOverride,
  testId = "dial-input",
}) => {
  const original = useRef(initialValue);
  const [draft, setDraft] = useState(initialValue);

  const adjust = (delta: number) =>
    setDraft((prev) => clamp(round1(prev + delta), min, max));

  const handleDrag = (value: number) =>
    setDraft(clamp(round1(value), min, max));

  const isDirty = draft !== original.current;

  const range = max - min;
  const pct = range > 0 ? Math.min(Math.max((draft - min) / range, 0), 1) : 0;

  const onHandleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
      e.preventDefault();
      adjust(KEYBOARD_STEP);
    } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
      e.preventDefault();
      adjust(-KEYBOARD_STEP);
    }
  };

  const { root } = dialStyles;

  return (
    <Section dataTestId={testId} className={root(size)}>
      <DialInputCircle
        size={size}
        pct={pct}
        color={color}
        testId={testId}
        label={label}
        draft={draft}
        min={min}
        max={max}
        onKeyDown={onHandleKeyDown}
        onDrag={handleDrag}
        styleOverride={styleOverride}
      >
        <DialInputContent
          size={size}
          draft={draft}
          label={label}
          unit={unit}
          testId={testId}
          styleOverride={styleOverride}
        />
      </DialInputCircle>

      <DialInputActions
        showStepButtons={showStepButtons}
        isDirty={isDirty}
        onSave={() => onChange(draft)}
        onDiscard={() => { setDraft(original.current); onChange(original.current); }}
        onAdjust={adjust}
        color={color}
        testId={testId}
        styleOverride={styleOverride}
      />
    </Section>
  );
};
