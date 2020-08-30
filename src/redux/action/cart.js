import {addToCart, deleteMenuAdded} from './actionType'


export const addMenu = (id,) => (dispatch, getState)=>{
    const cartItem = getState().cart.cartItem.slice()
    let alreadyExist = false
    cartItem.forEach(item => {
        if(item.id === id){
            alreadyExist = true;
            item.qty++
        }
    });
    if(!alreadyExist){
       const cartData = {
           id: id,
           menu:menu,
           price: price,
           image:image,
           qty:1
       }
        cartItem.push(cartData)
    }
    dispatch({
        type:addToCart,
        payload: {cartItem}
    });

}


export const deleteMenu = (data)=>{
    return{
        type:deleteMenuAdded,
        payload:data
    }
}