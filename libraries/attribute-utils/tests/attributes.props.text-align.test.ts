import { test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/components/text/align";
import { resolutions } from "./utils";
import { TextAlignmentType } from "@phoenix-ui/types/texts";

test("attributes.props.text-align", () => {
  resolutions.forEach((resolution) => {
    variants.base.split(" ").forEach((align) => {
      const properties: ClassByResponsiveProps =
        resolution.name === "base"
          ? { align: align as TextAlignmentType }
          : {
              overrides: {
                [resolution.name]: { align: align as TextAlignmentType },
              },
            };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        resolution.name === "base" ? align : `${resolution.value}:${align}`
      );
    });
  });
});
