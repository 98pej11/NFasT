const initialState = {
  storeTitle: "",
};
function publishReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_STORETITLE_SUCCESS":
      return { ...state, storeTitle: payload };
    default:
      return { ...state };
  }
}
export default publishReducer;
