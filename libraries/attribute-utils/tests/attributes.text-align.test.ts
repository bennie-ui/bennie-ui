import { test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/tailwind/attributes/align";
import { resolutions } from "./utils";
import { TextAlignmentType } from "@phoenix-ui/types/texts";

test("attributes.props.text-align", () => {
  resolutions.forEach((resolution) => {
    variants.base.forEach((align) => {
      const align_value = align.split('-')[1]
      const properties: ClassByResponsiveProps =
        resolution.name === "base"
          ? { align: align_value as TextAlignmentType }
          : {
              overrides: {
                [resolution.name]: { align: align_value as TextAlignmentType },
              },
            };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        resolution.name === "base" ? align : `${resolution.value}:${align}`
      );
    });
  });
});
