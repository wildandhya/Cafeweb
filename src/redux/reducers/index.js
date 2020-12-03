/** @format */

import { combineReducers } from "redux";

import getProductReducer from "./product";
import cartReducer from "./cart";
import historyReducer from "./history";
import authReducer from "./auth";

const rootReducers = combineReducers({
  user: authReducer,
  product: getProductReducer,
  cart: cartReducer,
  history: historyReducer,
});

export default rootReducers;
