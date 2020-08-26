/** @format */

import React, { Fragment } from "react";

import "../styles/sidebar.css";
import "../styles/foodcontent.css";
import "../styles/cart.css";
import "../styles/Home.css";
import Cart from "../components/cart";
import FoodContent from "../components/foodContent";
import Axios from "axios";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      menuSelected: [],
    };
  }

  addToCart = (id, menu, price, image) => {
    let menuSelected = this.state.menuSelected;
    let cartData = {
      id: id,
      menu: menu,
      price: price,
      image: image,
      qty: 1,
    };
    let checkId = menuSelected.findIndex((item) => item.id === id);
    if (checkId >= 0) {
      menuSelected.splice(checkId, 1);
      this.setState({
        menuSelected: menuSelected,
      });
    } else {
      menuSelected.push(cartData);
      this.setState({
        menuSelected: menuSelected,
      });
    }
  };
  handlePlus = (id) => {
    let checkId = this.state.menuSelected.findIndex((item) => item.id === id);
    let data = [...this.state.menuSelected];
    data[checkId] = {
      ...data[checkId],
      qty: this.state.menuSelected[checkId].qty + 1,
    };
    console.log(data);
    this.setState({
      menuSelected: data,
    });
  };

  componentDidMount() {
    Axios.get("http://localhost:8000/product?page=1&limit=9").then((result) => {
      this.setState({
        product: result.data.data,
      });
    });
  }
  render() {
    // console.log(this.state.menuSelected);
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-9 col-md- p-0'>
              <Header />
              <div className='row'>
                <div className='col-1'>
                  <Sidebar />
                </div>
                <div className='col-11 p-0'>
                  <FoodContent
                    data={this.state.product}
                    addToCart={(id, menu, price, image, qty) =>
                      this.addToCart(id, menu, price, image, qty)
                    }
                  />
                </div>
              </div>
            </div>
            <div className='col-3 col-md-3 p-0'>
              <Cart
                menuSelected={this.state.menuSelected}
                handlePlus={(id) => this.handlePlus(id)}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
