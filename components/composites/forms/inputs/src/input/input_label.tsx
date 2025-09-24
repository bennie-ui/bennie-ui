import { FC } from "react";
import { Section } from "@bennie-ui/section";
import { ComponentProperties } from "@bennie-ui/types";
import { InputLabelProps } from "./input.types";
import {
  input_label_embedded_styles,
  input_label_left_styles,
  input_label_top_styles
} from "./input_styles";

export const InputLabel: FC<{ label?: string | InputLabelProps }> = ({ label }) => {
  if (!label) {
    return null;
  }
  const styles = get_styles_by_label(label);

  return <Section {...styles}>
    {typeof label === 'string' ? label : label.text}
  </Section>;
}

const get_styles_by_label = (label: string | InputLabelProps): ComponentProperties => {
  if (typeof label === 'string') {
    return input_label_embedded_styles;
  } else {
    switch (label.position) {
      case 'top':
        return input_label_top_styles;

      case 'left':
        return input_label_left_styles;

      default:
        return input_label_embedded_styles;
    }
  }
}
