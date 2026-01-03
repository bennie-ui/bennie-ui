import {
  FC,
  ChangeEvent,
  SyntheticEvent,
} from "react";
import { Section } from "@bennie-ui/section";
import { Radio } from "./radio";
import { InputOption } from "../input.types";
import { radioGroupBase, radioGroupRow, radioGroupCol } from "./radio-group.styles";
import { cx } from 'styled-system/css';

type RadioGroupProps = {
  id?: string;
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  display?: "row" | "col";
  options: InputOption[];
  onClick?: (event: SyntheticEvent) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup: FC<RadioGroupProps> = (properties) => {
  const display = properties.display || "col";

  // Build className
  const className = cx(
    radioGroupBase,
    display === "row" ? radioGroupRow : radioGroupCol,
    properties.className
  );

  return (
    <Section className={className}>
      {properties.options.map((it) => {
        return (
          <Radio
            key={it.label}
            item={it}
            onChange={properties.onChange}
            disabled={properties.disabled}
          />
        );
      })}
    </Section>
  );
};
