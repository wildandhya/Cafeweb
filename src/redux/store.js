/** @format */

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducers from "./reducers/index";
import rpm from "redux-promise-middleware";

const logger = createLogger();

const enhancers = applyMiddleware(rpm, logger);

const store = createStore(rootReducers, enhancers);

export default store;
