/** @format */

import React, { Fragment } from "react";

import "../styles/Home.css";
import Sidebar from "../components/sidebar";
import FoodContent from "../components/foodContent";
import Cart from "../components/cart";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-1 p-0'>
              <Sidebar />
            </div>
            <div className='col-8 p-0'>
              <FoodContent />
            </div>
            <div className='col-3 p-0'>
              <Cart />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
