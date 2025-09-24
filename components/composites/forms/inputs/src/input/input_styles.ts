import { ComponentProperties } from "@bennie-ui/types"

export const input_label_base_styles: ComponentProperties = {
  size: 'sm',
  colors: {
    text: { color: "black" },
    background: { color: "white" }
  }
}

export const input_label_top_styles: ComponentProperties = {
  ...input_label_base_styles,
  margin: { bottom: '2' }
}

export const input_label_left_styles: ComponentProperties = {
  ...input_label_base_styles,
  flex: { direction: "col", justifyContent: 'center', shrink: '0' },
  margin: { right: '2' }
}

export const input_label_embedded_styles: ComponentProperties = {
  ...input_label_base_styles,
  padding: { x: '2' },
  position: { style: 'absolute', index: '10', positive: { left: "3" }, inverse: { top: "2" } }
}


