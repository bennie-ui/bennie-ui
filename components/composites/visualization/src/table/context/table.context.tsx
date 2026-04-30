import { Context, createContext, useContext } from "react";

type TableContextValue = {
  results: any[]
  filter: (search: string) => void
}

export const TableContext: Context<TableContextValue> = createContext({
  results: [],
  filter: (search: string) => { console.log('noop', search) }
});

export const useTableContext = () => useContext<TableContextValue>(TableContext);

