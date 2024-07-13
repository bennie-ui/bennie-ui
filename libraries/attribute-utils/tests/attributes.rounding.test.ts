import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/rounding";
import { RoundingType } from "@phoenix-ui/types/attributes";

describe("attributes.rounding", () => {
  variants.base.forEach((rounding) => {
    test(`:${rounding}`, () => {
      const rounding_value = rounding.split("-")[1];
      const properties: ClassByResponsiveProps = {
        rounding: rounding_value as RoundingType,
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(rounding);
    });
  });
});
