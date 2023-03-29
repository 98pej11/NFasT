const initialState = {
  stores: [],
  nfast: "",
};
function mainpage(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DISTANCE_LIST_SUCCESS":
      //   console.log(payload);
      return { ...state, stores: payload.data };
    case "GET_TRANS_LIST_SUCCESS":
      //   console.log(payload);
      return { ...state, stores: payload.data };
    case "GET_FLOATING_NFAST":
      return { ...state, nfast: payload.data };
    default:
      return { ...state };
  }
}
export default mainpage;
