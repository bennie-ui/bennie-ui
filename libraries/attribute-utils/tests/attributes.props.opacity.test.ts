import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/opacity";

describe("attributes.props.opacity", () => {
  test(`opacity`, () => {
    variants.base.split(" ").forEach((opacity) => {
      const properties: ClassByResponsiveProps = { opacity };
      const result = getClassByViewPort(properties);

      // opacity only working for text without (md|lg) overrides
      expect(result.trim()).toBe(opacity);
    });
  });
});
