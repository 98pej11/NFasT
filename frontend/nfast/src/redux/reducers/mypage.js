const initialState = {
  availableNfasts: [],
  unavailableNfasts: [],
  bookmarkList: [],
};
function mypage(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_AVAILABLE_NFASTS_SUCCESS":
      return { ...state, availableNfasts: payload.data.nfasts };
    case "GET_UNAVAILABLE_NFASTS_SUCCESS":
      return { ...state, unavailableNfasts: payload.data.nfasts };
    case "GET_BOOKMARKLIST_SUCCESS":
      return { ...state, bookmarkList: payload.data.owner };
    default:
      return { ...state };
  }
}

export default mypage;
