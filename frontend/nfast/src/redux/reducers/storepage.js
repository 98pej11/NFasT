const initialState = {
  storedetail: "",
  purchaseList: [],
  isBookMark: "",
  totalCnt: "",
  amount: "",
  flag: "",
  purchaseInfo: [],
  nfastPrice: "",
};
function storepage(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_STOREDETAIL_SUCCESS":
      return { ...state, storedetail: payload.data.detail };
    case "GET_PURCHASE_LIST_SUCCESS":
      return { ...state, purchaseList: payload.data.nfasts };
    case "GET_BOOKMARK_SUCCESS":
      return { ...state, isBookMark: payload.data.bookmark };
    case "SAVE_TOTALCNT":
      return { ...state, totalCnt: payload.data };
    case "SAVE_AMOUNT":
      return { ...state, amount: payload.data };
    case "SAVE_HANDLER":
      return { ...state, flag: payload.data };
    case "GET_PURCHASE_INFO":
      console.log("PLAYOD", payload);
      return { ...state, purchaseInfo: payload.data.nfasts };
    case "GET_NFAST_PRICE":
      return { ...state, nfastPrice: payload.data.nfastPrice };
    default:
      return { ...state };
  }
}
export default storepage;
