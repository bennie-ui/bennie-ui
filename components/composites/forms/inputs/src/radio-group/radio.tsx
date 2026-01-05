import React, { FC, ChangeEvent } from "react";

import { Text } from "@bennie-ui/text";
import { Section } from "@bennie-ui/section";
import { InputOption } from "../input.types";
import { DATA_TEST_ID } from "@bennie-ui/constants";
import { radioItemBase, radioInputBase, radioLabelBase } from "./radio-group.styles";

export interface RadioGroupAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  disabled?: boolean;
}

type RadioProperties = {
  item: InputOption;
  disabled?: boolean;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Radio: FC<RadioProperties> = (properties) => {
  const attributes: RadioGroupAttributes = {};

  const { item, onChange } = properties;

  const handleOnChange = () => {
    // @ts-ignore
    onChange({ target: { name: item.name, value: item.value } });
  };

  if (properties.disabled) {
    attributes.disabled = true;
  }

  return (
    <Section
      key={item.name}
      className={radioItemBase}
      onClick={handleOnChange}
    >
      <input
        type="radio"
        {...attributes}
        className={radioInputBase}
        name={item.name}
        checked={item.selected}
        onChange={handleOnChange}
      />
      <Text className={radioLabelBase}>{item.label}</Text>
    </Section>
  );
};
