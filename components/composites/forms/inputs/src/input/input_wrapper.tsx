import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode, useEffect, useRef, useState } from "react"
import { InputAttributes, InputLabelProps, InputProperties } from "./input.types"
import { Section } from "@bennie-ui/section"
import { InputLabel } from "./input_label"
import { useDebounce } from "@bennie-ui/component-utils"
import { getClassNames, getComponentProperties } from "@bennie-ui/attribute-utils";

type InputWrapperProperties = Omit<InputProperties, 'children'> & {
  type: HTMLInputTypeAttribute
  children: (
    query: string,
    udpate_query: (query: string) => void
  ) => ReactNode
}

export const InputWrapper: FC<InputWrapperProperties> = (properties
) => {
  const attributes: InputAttributes = {};
  const { name, required, type } = properties;
  const inputRef = useRef(null);
  const isTypingRef = useRef(false);
  const [localQuery, setLocalQuery] = useState(properties.value || '')
  const debouncedLocalQuery = useDebounce(localQuery, 300);

  const disabled_styles = properties.disabled ? 'bg-gray-100 opacity-50' : ''

  const className = getClassNames(
    "w-full rounded-md",
    disabled_styles
  );

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    isTypingRef.current = true;
    setLocalQuery(event.target.value);
  }

  useEffect(() => {
    if (isTypingRef.current) {
      if (debouncedLocalQuery !== properties.value) {
        properties.onChange && properties.onChange({
          // @ts-ignore
          target: { name: properties.name, value: debouncedLocalQuery }
        })
      }
      isTypingRef.current = false;
    }
  }, [debouncedLocalQuery]);

  return <Section
    margin={{ top: "4" }}
    position={{ style: "relative" }}
    colors={{ text: { color: "black" } }}
    width={{ value: properties.full_width ? 'full' : 'fit' }}
    flex={{ direction: (properties?.label as InputLabelProps)?.position === "left" ? "row" : "col" }}
  >
    <InputLabel label={properties.label} />
    <Section width={{ value: properties.full_width ? "full" : 'fit' }}>
      <input
        name={name}
        ref={inputRef}
        type={type ?? "text"}
        required={required}
        autoComplete={properties.autocomplete ?? "off"}
        onChange={handleOnChange}
        {...attributes}
        {...getComponentProperties({
          ...properties,
          children: undefined,
          className
        })}
        value={localQuery}
      />
    </Section>
    {properties.children(localQuery, setLocalQuery)}

  </Section>

}
