/** @format */

import React, { Fragment } from "react";

import "../styles/sidebar.css";
import "../styles/foodcontent.css";
import "../styles/cart.css";
import "../styles/Home.css";
import Cart from "../components/cart";
import Sidebar from "../components/sidebar";
import FoodContent from "../components/foodContent";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-1 col-md- p-0'>
              <Sidebar />
            </div>
            <div className='col-8 col-md-8 p-0'>
              <FoodContent />
            </div>
            <div className='col-3 col-md-3 p-0'>
              <Cart />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
