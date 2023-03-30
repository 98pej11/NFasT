import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import authReducer from "./authenticate";
import mypageReducer from "./mypage";
import mainReducer from "./mainpage";
import publishReducer from "./publish";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["authReducer", "mainReducer", "mypageReducer"],
// };

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  mypageReducer,
  publishReducer,
});

export default rootReducer;
