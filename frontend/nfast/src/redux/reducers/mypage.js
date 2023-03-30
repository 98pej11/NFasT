const initialState = {
  availableNfasts: [],
  unavailableNfasts: [],
  bookmarkList: [],
  userInfo: "",
  storeInfo: "",
  mintIncome: "",
  resellIncome: "",
};
function mypageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_AVAILABLE_NFASTS_SUCCESS":
      return { ...state, availableNfasts: payload.data.nfasts };
    case "GET_UNAVAILABLE_NFASTS_SUCCESS":
      return { ...state, unavailableNfasts: payload.data.nfasts };
    case "GET_BOOKMARKLIST_SUCCESS":
      return { ...state, bookmarkList: payload.data.stores };
    case "GET_USERINFO_SUCCESS":
      return { ...state, userInfo: payload.data.user };
    case "GET_STOREINFO_SUCCESS":
      return { ...state, storeInfo: payload.data.store };
    case "GET_MINTINCOME_SUCCESS":
      return { ...state, mintIncome: payload.data.monthlyMintIncome };
    case "GET_RESELLINCOME_SUCCESS":
      return { ...state, resellIncome: payload.data.monthlyResellIncome };
    default:
      return { ...state };
  }
}

export default mypageReducer;