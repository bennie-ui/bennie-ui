import React, { ChangeEvent, FC, useState } from "react";
import { getComponentProperties } from "@bennie-ui/attribute-utils";
import { InputAttributes, InputProperties } from "./input.types";
import { Section } from "@bennie-ui/section";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";

export const Input: FC<InputProperties> = (properties: InputProperties) => {
  const { name, withClearMark } = properties;
  const attributes: InputAttributes = {};
  const [state, setState] = useState<string>("");

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    properties.onChange && properties.onChange(event);
  };

  return (
    <Section position={{ style: "relative" }}>
      <input
        name={name}
        onChange={handleOnChange}
        {...attributes}
        {...getComponentProperties({ ...properties })}
        value={state}
      />
      {state != "" && withClearMark && (
        <Button
          padding={{ all: "0" }}
          position={{ style: "absolute", right: "0" }}
          onClick={() => {
            setState("");
          }}
        >
          <Icon figure="XMarkIcon" colors={{ text: { color: "gray" } }} />
        </Button>
      )}
    </Section>
  );
};
