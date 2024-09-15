import { BuilderFunction } from "@bennie-ui/types";

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
  TextWeightAttributeBuilder,
} from "@bennie-ui/attribute-utils";
import { FlexBuilder } from "./builders/builders.flex";

export type ClassBuilderType = {
  keys: () => string[];
  get: (property: string, child: string) => BuilderFunction | undefined;
};

export const ClassBuilder = (): ClassBuilderType => {
  const builders = {
    align: TextAlignAttributeBuilder,
    colors: ColorBuilder,
    flex: FlexBuilder,
    height: HeightAttributeBuilder,
    margin: MarginAttributeBuilder,
    opacity: OpacityAttributeBuilder,
    padding: PaddingAttributeBuilder,
    rounding: RoundingAttributeBuilder,
    width: WidthAttributeBuilder,
    weight: TextWeightAttributeBuilder,
    size: TextSizeAttributeBuilder,
  };

  return {
    keys: () => Object.keys(builders),
    get: (property: string, child: string): BuilderFunction | undefined => {
      // TODO: try to refactor this.
      // @ts-expect-error: not sure how to type this.
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
