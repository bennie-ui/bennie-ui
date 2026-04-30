import { CSSProperties, FC, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { Section } from "@bennie-ui/section";
import { toHex } from "@bennie-ui/types/colors";
import { useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { TailwindColor, DialStyleOverride } from "./dial-input.types";
import { dialStyles, svgColorsDark, svgColorsLight } from "./dial-input.styles";

// 11PM = 330° from 12 o'clock. stroke-dasharray starts at 3 o'clock (SVG default).
// Rotating -120° moves the start 120° CCW from 3 o'clock → lands at 11PM.
const FILL_ROTATE_DEG = -120;
const ARC_START_DEG = 330;
const TICK_COUNT = 72;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const polarToXY = (cx: number, cy: number, r: number, deg: number) => {
  const rad = toRad(deg - 90);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

// Mouse/touch position → pct along the arc [0, 1]
// atan2(dy, dx) gives screen angle (0=right, CW positive because y↓).
// Adding 90° converts to clockwise-from-12-o'clock.
// Subtracting ARC_START_DEG aligns 0 with the 11PM start of the arc.
const pointerToPct = (
  clientX: number,
  clientY: number,
  centerX: number,
  centerY: number,
): number => {
  const dx = clientX - centerX;
  const dy = clientY - centerY;
  const screenAngleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
  const clockwiseDeg = (screenAngleDeg + 90 + 360) % 360;
  const relativeAngle = (clockwiseDeg - ARC_START_DEG + 360) % 360;
  return relativeAngle / 360;
};

type DialInputCircleProps = {
  size: number;
  pct: number;
  color: TailwindColor;
  testId: string;
  label?: string;
  draft: number;
  min: number;
  max: number;
  onKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
  onDrag: (value: number) => void;
  styleOverride?: DialStyleOverride;
  children?: ReactNode;
};

export const DialInputCircle: FC<DialInputCircleProps> = ({
  size, pct, color, testId, label, draft, min, max, onKeyDown, onDrag, styleOverride, children,
}) => {
  const { wrapper, input } = dialStyles;
  const hex = toHex(color);
  const dark = useDarkMode();
  const baseSvg = dark ? svgColorsDark : svgColorsLight;

  const svg = {
    trackStroke:     resolveColor(styleOverride?.track, dark)         ?? baseSvg.trackStroke,
    majorTickStroke: resolveColor(styleOverride?.ticks?.major, dark)  ?? baseSvg.majorTickStroke,
    minorTickStroke: resolveColor(styleOverride?.ticks?.minor, dark)  ?? baseSvg.minorTickStroke,
    handleDotShadow: resolveColor(styleOverride?.handleShadow, dark)  ?? baseSvg.handleDotShadow,
  };

  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.4375;
  const strokeW = size * 0.0625;
  const tickOuterR = r + strokeW / 2 + size * 0.05;
  const circumference = 2 * Math.PI * r;
  const fillDash = circumference * pct;
  const handleDeg = (ARC_START_DEG + 360 * pct) % 360;
  const handlePos = polarToXY(cx, cy, r, handleDeg);

  const fillStyle: CSSProperties = {
    transform: `rotate(${FILL_ROTATE_DEG}deg)`,
    transformOrigin: `${cx}px ${cy}px`,
    transition: "stroke-dasharray 0.2s ease",
  };

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.cursor = "grabbing";
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const parent = e.currentTarget.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const newPct = pointerToPct(e.clientX, e.clientY, rect.left + rect.width / 2, rect.top + rect.height / 2);
    onDrag(min + newPct * (max - min));
  };

  const onPointerUp = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    e.currentTarget.style.cursor = "grab";
  };

  return (
    <Section dataTestId={`${testId}-dial`} className={wrapper.cn} style={wrapper.s(size)}>
      <svg
        data-testid={`${testId}-svg`}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={input.svg.cn}
        aria-hidden="true"
      >
        <g data-testid={`${testId}-ticks`}>
          {Array.from({ length: TICK_COUNT }, (_, i) => {
            const angle = toRad((360 / TICK_COUNT) * i - 90);
            const major = i % 6 === 0;
            const innerR = tickOuterR - (major ? size * 0.065 : size * 0.04);
            return (
              <line
                key={i}
                x1={cx + tickOuterR * Math.cos(angle)}
                y1={cy + tickOuterR * Math.sin(angle)}
                x2={cx + innerR * Math.cos(angle)}
                y2={cy + innerR * Math.sin(angle)}
                stroke={major ? svg.majorTickStroke : svg.minorTickStroke}
                strokeWidth={major ? 1.5 : 1}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        <circle
          data-testid={`${testId}-track`}
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={svg.trackStroke}
          strokeWidth={strokeW}
        />

        {pct > 0.005 && (
          <circle
            data-testid={`${testId}-fill`}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={hex}
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={`${fillDash} ${circumference}`}
            style={fillStyle}
          />
        )}

        {pct > 0.005 && (
          <g data-testid={`${testId}-handle-dot`}>
            <circle cx={handlePos.x} cy={handlePos.y} r={strokeW * 0.9} fill={svg.handleDotShadow} />
            <circle cx={handlePos.x} cy={handlePos.y} r={strokeW * 0.5} fill={hex} />
          </g>
        )}
      </svg>

      <Section
        dataTestId={`${testId}-handle`}
        className={input.handle.cn}
        role="slider"
        aria-label={label ?? "value"}
        aria-valuenow={draft}
        aria-valuemin={min}
        aria-valuemax={max}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onFocus={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 3px ${hex}`; }}
        onBlur={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
        style={input.handle.s(strokeW, handlePos.x, handlePos.y)}
      />

      {children}
    </Section>
  );
};
