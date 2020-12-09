import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rpm from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import rootReducers from './reducers/index' 


const logger = createLogger()

const enhancers = applyMiddleware(rpm, logger, thunk)

const store = createStore(rootReducers, enhancers)


export default store
