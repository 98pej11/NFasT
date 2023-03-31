const initialState = {
  searchList: [],
};

function searchReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_SEARCH_LIST_SUCCESS":
      return { ...state, searchList: payload.data.stores };
    default:
      return { ...state };
  }
}

export default searchReducer;
