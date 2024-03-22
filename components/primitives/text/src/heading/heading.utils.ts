import type { HeadingTagType } from "@phoenix-ui/types/texts";

export const getTagSize = (tag: HeadingTagType) => {
  switch (tag) {
    case "h1":
      return "font-3xl";
    case "h2":
      return "font-2xl";
    case "h3":
      return "font-2xl";
    case "h4":
      return "font-xl";
    case "h5":
      return "font-xl";
    case "h6":
      return "font-lg";

    default:
      return "font-lg";
  }
};

export const getTagWeight = (tag: HeadingTagType) => {
  switch (tag) {
    case "h1":
      return "font-semibold";
    case "h2":
      return "font-semibold";
    case "h3":
      return "font-medium";
    case "h4":
      return "font-semibold";
    case "h5":
      return "font-medium";
    case "h6":
      return "font-medium";

    default:
      return "font-medium";
  }
};
