import { ReactNode, useReducer, useEffect } from "react";
import { TableContext } from "./table.context";
import reducer from "./table.reducer";

type TableProviderProps = {
  data: any[];
  children: ReactNode;
};

const init = (data: any[]) => ({
  results: data,
  search: "",
  filtered_results: data,
});

export const TableProvider = ({ children, data }: TableProviderProps) => {
  const [state, dispatch] = useReducer(reducer, data, init);

  useEffect(() => {
    dispatch({ type: "init", payload: data });
  }, [data]);

  return (
    <TableContext.Provider value={{ results: state.filtered_results, filter: (search) => dispatch({ type: "filter", payload: { search, field: "" } }) }}>
      {children}
    </TableContext.Provider>
  );
};
