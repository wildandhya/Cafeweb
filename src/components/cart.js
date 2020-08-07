/** @format */

import React, { Fragment } from "react";

import "../styles/Home.css";

class Cart extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='cart'>
          <div className='cart-header'>
            <h1>Cart</h1>
          </div>
          <div className='cart-content'>
            <img
              src='../images/icon/food-and-restaurant.png'
              alt='cart empty'
            />
            <h3>Your cart is empty</h3>
            <p>Please add some items from the menu</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
