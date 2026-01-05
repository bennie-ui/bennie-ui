import type { SystemStyleObject } from "styled-system/types";
import type { ButtonVariant, ButtonSize } from "./button.types";

export const getButtonSizeStyles = (size?: ButtonSize): SystemStyleObject => {
  switch (size) {
    case "small":
      return { padding: "2" };
    case "medium":
      return { paddingX: "4", paddingY: "2" };
    case "large":
      return { paddingX: "16", paddingY: "3" };
    default:
      return { padding: "2" };
  }
};

export const getButtonVariantStyles = (variant?: ButtonVariant): SystemStyleObject => {
  switch (variant) {
    case "primary":
      return { 
        color: "white", 
        backgroundColor: "blue.500",
        _hover: { backgroundColor: "blue.600" }
      };
    case "secondary":
      return { 
        color: "white", 
        backgroundColor: "neutral.500",
        _hover: { backgroundColor: "neutral.600" }
      };
    case "success":
      return { 
        color: "white", 
        backgroundColor: "emerald.500",
        _hover: { backgroundColor: "emerald.600" }
      };
    case "danger":
      return { 
        color: "white", 
        backgroundColor: "red.500",
        _hover: { backgroundColor: "red.600" }
      };
    case "warning":
      return { 
        color: "white", 
        backgroundColor: "yellow.500",
        _hover: { backgroundColor: "yellow.600" }
      };
    case "info":
      return { 
        color: "white", 
        backgroundColor: "teal.500",
        _hover: { backgroundColor: "teal.600" }
      };
    case "light":
      return { 
        color: "black", 
        backgroundColor: "white",
        _hover: { backgroundColor: "gray.100" }
      };
    case "dark":
      return { 
        color: "white", 
        backgroundColor: "black",
        _hover: { backgroundColor: "gray.900" }
      };
    case "neutral":
    default:
      return { 
        color: "white", 
        backgroundColor: "slate.500",
        _hover: { backgroundColor: "slate.600" }
      };
  }
};
