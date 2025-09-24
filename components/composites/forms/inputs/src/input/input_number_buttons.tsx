import { Button } from "@bennie-ui/button";
import { Section } from "@bennie-ui/section";
import { FC, HTMLInputTypeAttribute } from "react"

type InputNumberButtonsProps = {
  text: string;
  increment?: number;
  onClick: (value: string) => void
}

export const InputNumberButtons: FC<InputNumberButtonsProps> = (properties) => {
  const { text, onClick } = properties;
  const increment = properties.increment || 1;
  const is_increment_decimal = increment.toString().includes('.')
  const increment_length = is_increment_decimal ? increment.toString().split('.')[1].length : 0

  return <Section
    position={{ style: "absolute", positive: { right: "2" } }}>
    <Button onClick={() => {
      let value = parseFloat(text) || 0
      onClick((value + increment).toFixed(increment_length).toString())
    }}>+</Button>
    <Button onClick={() => {
      const increment = properties.increment || 1;
      let value = parseFloat(text)
      onClick((value - increment).toFixed(increment_length).toString())
    }}>-</Button>
  </Section>

}
