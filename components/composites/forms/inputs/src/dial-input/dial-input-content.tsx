import { FC } from "react";
import { Section } from "@bennie-ui/section";
import { Text } from "@bennie-ui/text";
import { useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { dialStyles } from "./dial-input.styles";
import { DialStyleOverride } from "./dial-input.types";

type DialInputContentProps = {
  size: number;
  draft: number;
  label?: string;
  unit?: string;
  testId: string;
  styleOverride?: DialStyleOverride;
};

export const DialInputContent: FC<DialInputContentProps> = ({
  size, draft, label, unit, testId, styleOverride,
}) => {
  const { content } = dialStyles.input;
  const dark = useDarkMode();

  const labelColor = resolveColor(styleOverride?.label?.color, dark);
  const valueColor = resolveColor(styleOverride?.value?.color, dark);
  const unitColor  = resolveColor(styleOverride?.unit?.color, dark);

  return (
    <Section className={content.cn}>
      {label && (
        <Text
          dataTestId={`${testId}-label`}
          tag="span"
          className={content.label.cn}
          style={{ ...content.label.s(size), ...(labelColor && { color: labelColor }) }}
        >
          {label}
        </Text>
      )}
      <Text
        dataTestId={`${testId}-value`}
        tag="span"
        className={content.value.cn}
        style={{ ...content.value.s(size), ...(valueColor && { color: valueColor }) }}
      >
        {draft.toFixed(1)}
      </Text>
      {unit && (
        <Text
          dataTestId={`${testId}-unit`}
          tag="span"
          className={content.unit.cn}
          style={{ ...content.unit.s(size), ...(unitColor && { color: unitColor }) }}
        >
          {unit}
        </Text>
      )}
    </Section>
  );
};
