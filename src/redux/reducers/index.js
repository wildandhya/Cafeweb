import {combineReducers} from 'redux'

import getProductReducer from './productReducer'
import cartReducer from './cart'



 const rootReducers = combineReducers({
    product: getProductReducer,
    cart:cartReducer
    
})


export default rootReducers