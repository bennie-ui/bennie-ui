import { type ActionMap } from "@phoenix-ui/types/components";

export const ActionsMap: ActionMap = {
  neutral: {
    text: { color: "text-white" },
    background: { color: "bg-slate", weight: "500" },
  },
  primary: {
    text: { color: "text-white" },
    background: { color: "bg-blue", weight: "500" },
  },
  secondary: {
    text: { color: "text-white" },
    background: { color: "bg-neutral", weight: "500" },
  },
  success: {
    text: { color: "text-white" },
    background: { color: "bg-emerald", weight: "500" },
  },
  danger: {
    text: { color: "text-white" },
    background: { color: "bg-red", weight: "500" },
  },
  warning: {
    text: { color: "text-white" },
    background: { color: "bg-yellow", weight: "500" },
  },
  info: {
    text: { color: "text-white" },
    background: { color: "bg-teal", weight: "500" },
  },
  light: {
    text: { color: "text-black" },
    background: { color: "bg-white" },
  },
  dark: {
    text: { color: "text-white" },
    background: { color: "bg-black" },
  },
};
