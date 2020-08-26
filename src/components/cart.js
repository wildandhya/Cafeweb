/** @format */

/** @format */

import React from "react";

import "../styles/cart.css";
import "../styles/Home.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: props.menuSelected,
    };
  }
  handlePlus = (id) => {
    // let checkId = this.state.menuSelected.findIndex((item) => item.id === id);
    let data = this.state.menuSelected;

    console.log();
    this.setState({
      menuSelected: data,
    });
  };

  // handleMinus = (id) => {
  // if (this.state.count > 0) {
  // this.setState({
  // count: this.state.count - 1,
  // });
  // }
  // };
  render() {
    console.log(this.state.menuSelected[0]["menu"]);
    return (
      <div className='cart'>
        <div className='cart-header'>
          <h1>Cart</h1>
          <span></span>
        </div>
        {(() => {
          if (this.state.menuSelected.length === 0) {
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
                  {this.state.menuSelected.map((item) => {
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
                            <button onClick={this.handleMinus}>-</button>
                            <span>{item.qty}</span>
                            <button onClick={this.handlePlus}>+</button>
                          </div>{" "}
                        </div>
                        <h4 className='cart-price'>Rp.{item.price}</h4>
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
                        <h4>Rp.200000</h4>
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
}

export default Cart;
