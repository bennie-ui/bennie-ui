
type TableReducerState = {
  results: any[],
  search: string,
  filtered_results: any[]
}

type TableReducerAction =
  { type: 'init', payload: any[] } |
  { type: 'filter', payload: { search: string, field: string } }

export default function tableReducer(state: TableReducerState, action: TableReducerAction) {
  let filtered_results: any[]

  switch (action.type) {
    case 'init':
      const results = action.payload
      filtered_results = results.slice(0, 10)
      return {
        ...state,
        search: '',
        results,
        filtered_results
      }

    case 'filter':
      const { search, field } = action.payload
      filtered_results = state.results.filter((result) => {
        return result[field]?.toLowerCase().includes(search.toLowerCase())
      }).slice(0, 10)
      return {
        ...state,
        search,
        filtered_results
      }

    default:
      return state
  }

}
