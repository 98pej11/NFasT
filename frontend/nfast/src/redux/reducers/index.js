import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import authReducer from "./authenticate";
import mypageReducer from "./mypage";
import mainReducer from "./mainpage";
import publishReducer from "./publish";
<<<<<<< HEAD
import storepageReducer from "./storepage";
=======
import searchReducer from "./search";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["authReducer", "mainReducer", "mypageReducer"],
// };
>>>>>>> 97ee24296fffa14fd59d6b653d29fb927556cb18

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  mypageReducer,
  publishReducer,
<<<<<<< HEAD
  storepageReducer,
=======
  searchReducer,
>>>>>>> 97ee24296fffa14fd59d6b653d29fb927556cb18
});

export default rootReducer;
