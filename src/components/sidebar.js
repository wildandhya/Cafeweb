/** @format */

import React, { Fragment } from "react";

import AddModalMenu from "../components/Modal/modalAddProduct";

import { Link } from "react-router-dom";

import { useState } from "react";

import "../styles/sidebar.css";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <Fragment>
      <div className='sidebar'>
        <div className='content-sidebar d-flex flex-column align-items-center'>
          <Link to='/home'>
            <img src='../../images/icon/fork.png' alt='menu' />
          </Link>
          <Link to='/history'>
            <img src='../../images/icon/clipboard.png' alt='clipboard' />
          </Link>
          <img
            src='../../images/icon/add.png'
            alt='add'
            onClick={handleShowModal}
          />
          <AddModalMenu
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
          <Link to='/'>
            <img src='../../images/icon/logout.png' alt='clipboard' />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
