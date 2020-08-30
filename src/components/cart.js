/** @format */

import React, { } from "react";

// import Modal from "../components/addmodal";
import {connect, useDispatch} from 'react-redux'

import "../styles/cart.css";
import { plusBtn, minusBtn } from "../redux/action/cart";


const Cart = ({cart}) =>{
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
          <span>{cart.length}</span>
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
                          <h4 className='cart-price'>Rp.{item.qty * item.price}</h4>
                        </div>
                      );
                    })}
                    <div className='total'>
                      <div className='row'>
                        <div className='col-7'>
                          <h4 className=''>Total:</h4>
                          <p>*belum Termasuk PPn %</p>
                        </div>
                        <div className='col-5'>
                        <h4>{cart.reduce((total, item) => {
                          return total + item.price * item.qty;}, 0)}</h4>
                        </div>
                      </div>
                    </div>
                    <div className='btn-checkout'>
                      <button className='checkout'>Checkout</button>
                      <button className='cancel'>Cancel</button>
                    </div>
                  </div>
                </>
              );
            }
          })()}
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data
  }
}

export default connect(mapStateToProps)(Cart);
