import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/rounding";
import { RoundingType } from "@bennie-ui/types/attributes";

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
