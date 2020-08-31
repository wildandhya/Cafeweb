/** @format */

import { combineReducers } from "redux";

import getProductReducer from "./productReducer";
import cartReducer from "./cart";
import historyReducer from "./history";

const rootReducers = combineReducers({
  product: getProductReducer,
  cart: cartReducer,
  history: historyReducer,
});

export default rootReducers;
