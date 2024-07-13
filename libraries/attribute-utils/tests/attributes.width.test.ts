import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import type { ClassByResponsiveProps } from "../types";
import { getClassByViewPort } from "../src/attribute-utils";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/width";

describe("attributes.width", () => {
  resolutions.forEach((res) => {
    variants.base.forEach((w) => {
      test(` :${w}`, () => {
        const w_value = w.split("-")[1];
        const properties = getProperties(res.name, "width", "value", w_value);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);

        expect(result.trim()).toBe(
          res.name === "base" ? w : `${res.value}:${w}`,
        );
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const properties: ClassByResponsiveProps = {
        width: {
          value: "5",
        },
        overrides: {
          medium: {
            width: {
              value: "8",
            },
          },
          large: {
            width: {
              value: "10",
            },
          },
        },
      };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe("w-5 md:w-8 lg:w-10");
    });
  });
});
