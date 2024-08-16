import { BuilderFunction, ComponentProperties } from "@phoenix-ui/types";

import {
  ColorBuilder,
  RoundingAttributeBuilder,
  OpacityAttributeBuilder,
  TextAlignAttributeBuilder,
  TextSizeAttributeBuilder,
  HeightAttributeBuilder,
  WidthAttributeBuilder,
  MarginAttributeBuilder,
  PaddingAttributeBuilder,
} from "@phoenix-ui/attribute-utils";

export type ClassBuilderType = {
  keys: () => string[];
  get: (property: string, child: string) => BuilderFunction | undefined;
};

export const ClassBuilder = (): ClassBuilderType => {
  const builders = {
    colors: ColorBuilder,

    rounding: RoundingAttributeBuilder,
    opacity: OpacityAttributeBuilder,
    align: TextAlignAttributeBuilder,
    size: TextSizeAttributeBuilder,
    height: HeightAttributeBuilder,
    width: WidthAttributeBuilder,
    margin: MarginAttributeBuilder,
    padding: PaddingAttributeBuilder,
  };

  return {
    keys: () => Object.keys(builders),
    get: (property: string, child: string): BuilderFunction | undefined => {
      // @ts-ignore
      const { [property]: propery_builder } = builders;

      if (propery_builder && propery_builder[child]) {
        return propery_builder[child];
      }

      if (propery_builder) {
        return propery_builder;
      }

      return undefined;
    },
  };
};
