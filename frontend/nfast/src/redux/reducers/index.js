import { combineReducers } from "redux";
import authReducer from "./authenticate";
import publishReducer from "./publish";

const rootReducer = combineReducers({
  authReducer,
  publishReducer,
});

export default rootReducer;
