/** @format */

import React, { Fragment } from "react";

import Modal from "../components/addmodal";
import API from "../services/api";

import "../styles/cart.css";
import "../styles/Home.css";

class Cart extends React.Component {
  state = {
    show: false,
    product: [],
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  getProductApi = () => {
    API.getProductItem().then((result) => {
      this.setState({
        product: result,
      });
    });
  };
  componentDidMount() {
    this.getProductApi();
  }
  render() {
    return (
      <Fragment>
        <div className='cart'>
          <div className='cart-header d-flex  align-items-center justify-content-center'>
            <h1>Cart</h1>
            <div className='counter'>
              <p>0</p>
            </div>
          </div>
          <div className='cart-content d-flex flex-column justify-content-between'>
            <div className='cart-empty'>
              <img
                src='../images/icon/food-and-restaurant.png'
                alt='cart empty'
              />
              <h3>Your cart is empty</h3>
              <p>Please add some items from the menu</p>
            </div>
            <div className='btn-check d-flex flex-column'>
              <button className='checkout' onClick={this.showModal}>
                Checkout
              </button>
              <button className='cancel'>Cancel</button>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <div className='content-checkout'>
                  <div className='checkout-right'>
                    <div className='header'>
                      <h3>Checkout</h3>
                      <p>Cashier: Pevita</p>
                    </div>
                    <div className='menus'>
                      <h3>Coffe Latte 1x</h3>
                      <h3>Blackforest 1x</h3>
                      <h3>Salmon Truffle 1x</h3>
                      <h3>Ppn 10%</h3>
                    </div>
                    <div className='payment'>
                      <h3>Payment :</h3>
                      <h3>Cash</h3>
                    </div>
                  </div>
                  <div className='checkout-left'>
                    <div className='receipt'>
                      <h3>No Reciept: #0917876</h3>
                    </div>
                    <div className='price'>
                      <h3>Rp.15.000</h3>
                      <h3>Rp.30.000</h3>
                      <h3>Rp.60.000</h3>
                      <h3>Rp.10.000</h3>
                    </div>
                    <div className='total'>
                      <h3>Total : Rp.115.000</h3>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
