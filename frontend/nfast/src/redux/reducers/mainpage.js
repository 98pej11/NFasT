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
      console.log(payload.data.nfast);
      return { ...state, nfast: payload.data.nfast };
    default:
      return { ...state };
  }
}
export default mainpage;
