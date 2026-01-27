import { ChangeEvent, FC, useState } from "react";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";
import { Section } from "@bennie-ui/section";
import { InputAttributes, InputProperties } from "./input.types";
import { css, cx } from 'styled-system/css';
import { inputBase, inputWrapperBase, inputLabelBase, clearButtonBase } from "./input.styles";

export const Input: FC<InputProperties> = (properties: InputProperties) => {
  const { label, name, withClearMark, placeholder, id, dataTestId, disabled } = properties;
  const attributes: InputAttributes = {};
  const [state, setState] = useState<string>(properties.value);

  if (id) {
    attributes.id = id;
  }

  if (disabled ?? false) {
    attributes.disabled = true;
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    properties.onChange && properties.onChange(event);
  };

  const inputClassName = cx(
    inputBase,
    properties.css && css(properties.css),
    properties.className
  );

  return (
    <Section className={inputWrapperBase}>
      {label && (
        <Section className={inputLabelBase}>
          {label}
        </Section>
      )}
      <input
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={inputClassName}
        value={state}
        {...attributes}
      />
      {state != "" && withClearMark && (
        <Button
          className={clearButtonBase}
          onClick={() => {
            setState("");
          }}
        >
          <Icon
            figure="XMarkIcon"
            className={css({ color: "black" })}
          />
        </Button>
      )}
    </Section>
  );
};
