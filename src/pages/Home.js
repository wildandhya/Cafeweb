/** @format */

import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/action/product";

import "../styles/sidebar.css";
import "../styles/foodcontent.css";
import "../styles/cart.css";
import "../styles/Home.css";
import Cart from "../components/cart";
import Sidebar from "../components/sidebar";
import FoodContent from "../components/home/foodContent";
import Header from "../components/home/header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch();

  const { uploadMenu } = useSelector((state) => state.product);

  // const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchProduct());
    if (uploadMenu === true) {
      toast("Upload Product Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast",
      });
    }
  }, [dispatch, uploadMenu]);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-9 col-md- p-0'>
            <Header />
            <ToastContainer />
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
