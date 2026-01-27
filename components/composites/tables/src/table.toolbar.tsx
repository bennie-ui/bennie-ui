import { FC, ChangeEvent } from "react";
import { Input } from '@bennie-ui/inputs'
import { Section } from '@bennie-ui/section'
import { useTableContext } from './context'
import { css } from 'styled-system/css';
import { TableToolbarProps } from './table.types'

export const TableToolbar: FC<TableToolbarProps> = ({ }) => {
  const { filter } = useTableContext()
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value
    filter(search)
  }
  return <Section className={css({ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' })}>
    <Section>Action</Section>
    <Section>
      <Input name="search" value="" onChange={handleOnChange} />
    </Section>
  </Section>
}
TableToolbar.displayName = "TableToolbar"
