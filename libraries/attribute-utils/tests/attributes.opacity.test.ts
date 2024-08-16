import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/opacity";
import { OpacityType } from "@phoenix-ui/types/attributes";
import { ComponentProperties } from "@phoenix-ui/types";

describe("attributes.opacity", () => {
  variants.base.forEach((opacity) => {
    test(`:${opacity}`, () => {
      const opacity_value = opacity.split("-")[1];
      const properties: ComponentProperties = {
        opacity: opacity_value as OpacityType,
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(opacity);
    });
  });
});
