import type { HeadingTagType } from "@bennie-ui/types/texts";
import type { SystemStyleObject } from 'styled-system/types';

export const getTagStyles = (tag: HeadingTagType): SystemStyleObject => {
  switch (tag) {
    case "h1":
      return { fontSize: "3xl", fontWeight: "semibold" };
    case "h2":
      return { fontSize: "3xl", fontWeight: "medium" };
    case "h3":
      return { fontSize: "2xl", fontWeight: "semibold" };
    case "h4":
      return { fontSize: "2xl", fontWeight: "medium" };
    case "h5":
      return { fontSize: "xl", fontWeight: "semibold" };
    case "h6":
      return { fontSize: "xl", fontWeight: "medium" };
    case "h7":
      return { fontSize: "lg", fontWeight: "semibold" };
    default:
      return { fontSize: "3xl", fontWeight: "semibold" };
  }
};
