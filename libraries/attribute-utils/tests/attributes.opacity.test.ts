import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/opacity";
import { OpacityType } from "@phoenix-ui/types/attributes";

describe("attributes.opacity", () => {
  variants.base.forEach((opacity) => {
    test(`:${opacity}`, () => {
      const opacity_value = opacity.split("-")[1];
      const properties: ClassByResponsiveProps = {
        opacity: opacity_value as OpacityType,
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(opacity);
    });
  });
});
