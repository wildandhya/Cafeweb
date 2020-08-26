/** @format */
import { combineReducers } from "redux";

import { getProductReducer } from "./api";

const rootReducers = combineReducers({
  getAllProduct: getProductReducer,
});

export default rootReducers;
