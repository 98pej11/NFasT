import { combineReducers } from "redux";
import authReducer from "./authenticate";
import mypageReducer from "./mypage";
import mainReducer from "./mainpage";
import publishReducer from "./publish";
import storepageReducer from "./storepage";

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  mypageReducer,
  publishReducer,
  storepageReducer,
});

export default rootReducer;
