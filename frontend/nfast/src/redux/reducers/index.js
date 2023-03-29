import { combineReducers } from "redux";
import authReducer from "./authenticate";
import mypageReducer from "./mypage";
import mainReducer from "./mainpage";

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  mypageReducer,
});

export default rootReducer;
