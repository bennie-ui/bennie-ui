import { getClassByViewPort } from "./attributes.classes.utils";
import { ComponentAttributes, ComponentProperties } from "@phoenix-ui/types";
import { DATA_TEST_ID } from "@phoenix-ui/types/constants";

export const getComponentProperties = (properties: ComponentProperties) => {
  const attributes: ComponentAttributes = {};

  const className = properties.className + getClassByViewPort(properties);

  {
    if (properties.onClick) {
      attributes.onClick = properties.onClick;
    }

    if (properties.id !== "") {
      attributes.id = properties.id;
    }

    if (className !== "") {
      attributes.className = className.trim();
    }

    if (properties.dataTestId !== "") {
      // @ts-ignore
      attributes[DATA_TEST_ID] = properties.dataTestId;
    }
  }

  //console.log("f: className", className);

  return attributes;
};
