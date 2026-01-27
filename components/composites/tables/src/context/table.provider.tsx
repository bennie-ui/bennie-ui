import { ReactNode, useReducer, useEffect } from 'react'
import { TableContext } from './table.context'
import reducer from './table.reducer'

type TableProviderProps = {
  data: any[]
  children: ReactNode
}

const initialState = {
  results: [],
  search: '',
  filtered_results: []
}

export const TableProvider = ({ children, data }: TableProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { filtered_results } = state

  const filter = (search: string) => {
    dispatch({ type: 'filter', payload: { search, field: 'first_name' } })
  }

  useEffect(() => {
    dispatch({ type: 'init', payload: data })
  }, [data])

  return (
    <TableContext.Provider value={{
      results: filtered_results,
      filter
    }}>
      {children}
    </TableContext.Provider>
  )
}
