/** @format */

import React, { useState } from "react";

import { Badge, Button } from "react-bootstrap";

// import Modal from "../components/addmodal";
import { useDispatch, useSelector } from "react-redux";

import "../styles/cart.css";
import { plusBtn, minusBtn } from "../redux/action/cart";
import CheckoutModal from "./modalCheckout";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const increaseBtn = (id) => {
    const checkId = cart.findIndex((item) => {
      return item.id === id;
    });
    dispatch(plusBtn(checkId));
  };
  const decreaseBtn = (id) => {
    const checkId = cart.findIndex((item) => {
      return item.id === id;
    });
    dispatch(minusBtn(checkId));
  };
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>
          Cart <Badge variant='secondary'>{cart.length}</Badge>
        </h1>
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
              <h6 className='empty-subtext'>
                Please add some items from the menu
              </h6>
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
                            <Button onClick={() => decreaseBtn(item.id)}>
                              -
                            </Button>
                            <span>{item.qty}</span>
                            <Button onClick={() => increaseBtn(item.id)}>
                              +
                            </Button>
                          </div>{" "}
                        </div>
                        <h4 className='cart-price'>
                          Rp {(item.qty * item.price).toLocaleString("id-ID")}
                        </h4>
                      </div>
                    );
                  })}
                </div>
                <div className='bottom-wrap'>
                  <div className='total'>
                    <div className='title'>
                      <h4 className='total-title'>Total:</h4>
                      <h4 className='total-title'>
                        {" "}
                        Rp{" "}
                        {cart
                          .reduce((total, item) => {
                            return total + item.price * item.qty;
                          }, 0)
                          .toLocaleString("id-ID")}
                      </h4>
                    </div>
                    <div className='ppn-wrap'>
                      <p className='ppn'>*belum Termasuk PPn %</p>
                    </div>
                  </div>
                  <div className='btn-checkout'>
                    <Button className='checkout' onClick={handleShowModal}>
                      Checkout
                    </Button>
                    <Button className='cancel'>Cancel</Button>
                  </div>
                </div>
              </div>
              <CheckoutModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
              />
            </>
          );
        }
      })()}
    </div>
  );
};

export default Cart;
