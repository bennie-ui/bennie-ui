import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import type { ClassByResponsiveProps } from "../types";
import { getClassByViewPort } from "../src/attribute-utils";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/height";

describe("attributes.height", () => {
  resolutions.forEach((res) => {
    variants.base.forEach((h) => {
      test(` :${h}`, () => {
        const h_value = h.split("-")[1];
        const properties = getProperties(res.name, "height", "value", h_value);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);

        expect(result.trim()).toBe(
          res.name === "base" ? h : `${res.value}:${h}`,
        );
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const properties: ClassByResponsiveProps = {
        height: {
          value: "5",
        },
        overrides: {
          medium: {
            height: {
              value: "8",
            },
          },
          large: {
            height: {
              value: "10",
            },
          },
        },
      };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe("h-5 md:h-8 lg:h-10");
    });
  });
});
