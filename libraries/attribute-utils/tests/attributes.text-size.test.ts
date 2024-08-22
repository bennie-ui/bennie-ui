import { test, expect } from "bun:test";
import { TextSizeType } from "@phoenix-ui/types/texts";
import { getClassByViewPort } from "@phoenix-ui/attribute-utils";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/text";
import { resolutions } from "./utils";
import { ComponentProperties } from "@phoenix-ui/types";

resolutions.forEach((resolution) => {
  variants.base.size.forEach((size) => {
    test(`attributes.props.text-size: ${size}`, () => {
      const size_value = size.split("-")[1];

      const properties: ComponentProperties =
        resolution.name === "base"
          ? { size: size_value as TextSizeType }
          : {
              overrides: {
                [resolution.name]: { size: size_value as TextSizeType },
              },
            };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        resolution.name === "base" ? size : `${resolution.value}:${size}`,
      );
    });
  });
});
