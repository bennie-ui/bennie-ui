import { TextColorBuilder } from "packages/phoenix-ui/libraries/attribute-utils";
import { TextProperties } from "./text.types";

export const TextClassNameBuilder = (properties: TextProperties) => {
  const builders = {
    colors: () => ({
      text: TextColorBuilder,
      background: () => {},
    }),
    opacity: () => {},
    weight: () => {},
    overflow: () => {},
    display: () => {},
  };
  return {
    build: (): string => {
      return "";
    },
  };
};
