/** @format */
import { combineReducers } from "redux";

import { getProductReducer } from "./productReducer";

const rootReducers = combineReducers({
  product: getProductReducer,
});

export default rootReducers;
