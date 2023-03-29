import { createStore, applyMiddleware } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from "redux-thunk/es";
import rootReducer from "./reducers/index";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
