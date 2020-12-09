/** @format */

import React, { Fragment, useState } from "react";

import AddModalMenu from "../components/Modal/modalAddProduct";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/sidebar.css";
import { logoutAction } from "../redux/action/auth";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const user = useSelector((state) => state.user.user.data);

  if (user[0].level_id === 2) {
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
            <Link to='/' onClick={() => logoutAction()}>
              <img src='../../images/icon/logout.png' alt='clipboard' />
            </Link>
          </div>
        </div>
      </Fragment>
    );
  } else if (user[0].level_id === 1) {
    return (
      <Fragment>
        <div className='sidebar'>
          <div className='content-sidebar d-flex flex-column align-items-center'>
            <Link to='/home'>
              <img src='../../images/icon/fork.png' alt='menu' />
            </Link>
            <Link to='/' onClick={() => logoutAction()}>
              <img src='../../images/icon/logout.png' alt='clipboard' />
            </Link>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link to='/' onClick={() => logoutAction()}>
          <img src='../../images/icon/logout.png' alt='clipboard' />
        </Link>
      </Fragment>
    );
  }
};

export default Sidebar;
