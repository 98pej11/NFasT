const initialState = {
  storedetail: "",
  purchaseList: [],
  totalCnt: "",
  amount: "",
  flag: "",
  purchaseInfo: [],
};
function storepage(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_STOREDETAIL_SUCCESS":
      return { ...state, storedetail: payload.data.detail };
    case "GET_PURCHASE_LIST_SUCCESS":
      return { ...state, purchaseList: payload.data.nfasts };
    case "SAVE_TOTALCNT":
      return { ...state, totalCnt: payload.data };
    case "SAVE_AMOUNT":
      return { ...state, amount: payload.data };
    case "SAVE_HANDLER":
      return { ...state, flag: payload.data };
    case "GET_PURCHASE_INFO":
      return { ...state, purchaseInfo: payload.data.nfasts };
    default:
      return { ...state };
  }
}
export default storepage;
