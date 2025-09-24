import { FC } from "react"
import { Button } from "@bennie-ui/button";
import { Icon } from "@bennie-ui/icons";
import { InputLabelPosition, InputLabelProps } from "./input.types";

export interface InputClearMarkProps {
  text?: string;
  label?: string | InputLabelProps
  with_clear_mark?: boolean;
  onClick: () => void
}
export const InputClearMark: FC<InputClearMarkProps> = ({
  text,
  label,
  with_clear_mark = false,
  onClick
}) => {

  const mark_position = typeof label === 'string' ? '2' : (
    label?.position === 'top' ? '9' : '2'
  )

  return text && with_clear_mark && <Button
    padding={{ all: "0" }}
    position={{
      style: "absolute",
      positive: {
        right: "2",
        top: mark_position
      }
    }}
    onClick={onClick}
  >
    <Icon figure="XMarkIcon" colors={{ text: { color: "black" } }} />
  </Button>
}
