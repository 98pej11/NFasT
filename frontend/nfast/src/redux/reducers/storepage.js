const initialState = {
  storedetail: "",
};
function storepage(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_STOREDETAIL_SUCCESS":
      return { ...state, storedetail: payload.data.detail };
    default:
      return { ...state };
  }
}
export default storepage;
