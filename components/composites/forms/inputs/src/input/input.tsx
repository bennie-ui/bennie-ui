import { FC } from "react";
import { InputProperties } from "./input.types";
import { InputClearMark } from "./input_clear_mark";
import { InputNumberButtons } from './input_number_buttons'
import { InputWrapper } from "./input_wrapper";

export const TextInput: FC<InputProperties> = (properties) => {
  return (
    <InputWrapper {...properties} type='text'>
      {(query, update_query) => <>
        <InputClearMark
          text={query}
          label={properties.label}
          with_clear_mark={properties.with_clear_mark}
          onClick={() => { update_query('') }} />
      </>}
    </InputWrapper >
  );
};

export const NumberInput: FC<InputProperties> = (properties) => {
  return (
    <InputWrapper {...properties} type='number' >
      {
        (query, update_query) => <InputNumberButtons
          text={query}
          onClick={update_query} />
      }
    </InputWrapper >
  );
};

export const EmailInput: FC<InputProperties> = (properties) => {
  return (
    <InputWrapper {...properties} type='email' with_clear_mark>
      {() => <></>}
    </InputWrapper >
  );
};

export const PasswordInput: FC<InputProperties> = (properties) => {
  return (
    <InputWrapper {...properties} type='password' with_clear_mark>
      {() => <></>}
    </InputWrapper >
  );
};
