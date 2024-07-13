import { test, expect } from "bun:test";
import { TextSizeType } from "@phoenix-ui/types/texts";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/text-size";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { resolutions } from "./utils";

test("attributes.props.text-size", () => {
  resolutions.forEach((resolution) => {
    variants.base.split(" ").forEach((size) => {
      const properties: ClassByResponsiveProps =
        resolution.name === "base"
          ? { size: size as TextSizeType }
          : {
              overrides: {
                [resolution.name]: { size: size as TextSizeType },
              },
            };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        resolution.name === "base" ? size : `${resolution.value}:${size}`
      );
    });
  });
});
