import { combineReducers } from "redux";
import authReducer from "./authenticate";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
