type TableReducerState = {
  results: any[];
  search: string;
  filtered_results: any[];
};

type TableReducerAction =
  | { type: "init"; payload: any[] }
  | { type: "filter"; payload: { search: string; field: string } };

export default function tableReducer(state: TableReducerState, action: TableReducerAction) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        search: "",
        results: action.payload,
        filtered_results: action.payload,
      };

    case "filter": {
      const { search, field } = action.payload;
      const filtered_results = state.results.filter((result) =>
        result[field]?.toLowerCase().includes(search.toLowerCase())
      );
      return { ...state, search, filtered_results };
    }

    default:
      return state;
  }
}
