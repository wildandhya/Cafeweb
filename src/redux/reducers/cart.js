import { addToCart } from "../action/actionType"

const initialState={
    cartItem :[],
}

const cartReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case addToCart:
            return{ 
                ...state,
                cartItem: [...state.cartItem, payload.cartItem]
            }
        default:
            return state
    }
}


export default cartReducer