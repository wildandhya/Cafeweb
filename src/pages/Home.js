/** @format */

import React, { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchProduct } from "../redux/action/productAction";

import "../styles/sidebar.css";
import "../styles/foodcontent.css";
import "../styles/cart.css";
import "../styles/Home.css";
import Cart from "../components/cart";
import Sidebar from "../components/sidebar";
import FoodContent from "../components/home/foodContent";
import Header from "../components/home/header";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
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
                <FoodContent />
              </div>
            </div>
          </div>
          <div className='col-3 col-md-3 p-0'>
            <Cart />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
