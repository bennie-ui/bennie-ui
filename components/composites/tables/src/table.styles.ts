import { css, cx } from 'styled-system/css';

export const TableStyles = {
  main_container: css({
    py: 4,
    px: 4,
    width: 'fit-content',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.400',
    rounded: 'md',
  }),
  table: css({
    '& td, & th': {
      padding: '2',
    },
    '& tbody tr:last-child': {
      // borderBottom: 'none'
    }
  }),
  row: css({
    borderBottom: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.400'
  })
}
