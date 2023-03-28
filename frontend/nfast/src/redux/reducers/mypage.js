const initialState = {
  availableNfasts: [],
  unavailableNfasts: [],
};
function adminReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_AVAILABLE_NFASTS_SUCCESS":
      return { ...state, availableNfasts: payload.data.nfasts };
    case "GET_UNAVAILABLE_NFASTS_SUCCESS":
      return { ...state, unavailableNfasts: payload.data.nfasts };
    default:
      return { ...state };
  }
}

export default adminReducer;
