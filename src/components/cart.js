/** @format */

import React, { } from "react";

// import Modal from "../components/addmodal";
import { useDispatch, useSelector} from 'react-redux'

import "../styles/cart.css";
import { plusBtn, minusBtn } from "../redux/action/cart";


const Cart = () =>{

  const cart = useSelector(state => state.cart.data)
  const dispatch = useDispatch()


  const increaseBtn = (id)=>{
    const checkId = cart.findIndex(item => {
      return item.id === id
    });
    dispatch(plusBtn(checkId))
  }
  const decreaseBtn = (id)=>{
    const checkId = cart.findIndex(item => {
      return item.id === id
    });
    dispatch(minusBtn(checkId))
  }
    return (
        <div className='cart'>
          <div className='cart-header'>
            <h1>Cart</h1>
            <span className='badge'>{cart.length}</span>
          </div>
          {(() => {
            if (cart.length === 0) {
              return (
                <div className='empty-cart'>
                  <img
                    src='../../images/icon/food-and-restaurant.png'
                    alt='cart-empty'
                  />
                  <h3>Your Cart is Empty</h3>
                  <h6>Please Add Some Items From the Menu</h6>
                </div>
              );
            } else {
              return (
                <>
                  <div className='cart-items'>
                    <div className='top-wrap'>
                    {cart.map((item) => {
                      return (
                        <div className='cart-content' key={item.id}>
                          <img
                            className='cart-img'
                            src={item.image}
                            alt={item.menu}
                          />
                          <div className='mid'>
                            <h4 className='cart-title'>{item.menu}</h4>
                            <div className='btn-counter'>
                              <button onClick={()=> decreaseBtn(item.id)}>-</button>
                              <span>{item.qty}</span>
                              <button onClick={()=>increaseBtn(item.id)}>+</button>
                            </div>{" "}
                          </div>
                          <h4 className='cart-price'>Rp {item.qty * item.price}</h4>
                        </div>
                      );
                    })}
                    </div>
                    <div className='bottom-wrap'>
                    <div className='total'>
                        <div className='title'>
                          <h4 className='total-title'>Total:</h4>
                          <h4 className='total-title'> Rp {cart.reduce((total, item) => {
                            return total + item.price * item.qty;}, 0)}</h4>
                         
                        </div>
                        <div className='ppn-wrap'>
                        <p className='ppn'>*belum Termasuk PPn %</p>
                        </div>
                      </div>
                    <div className='btn-checkout'>
                      <button className='checkout'>Checkout</button>
                      <button className='cancel'>Cancel</button>
                    </div>
                  </div>
                  </div>
                </>
              );
            }
          })()}
        </div>
    );
}


export default Cart;
