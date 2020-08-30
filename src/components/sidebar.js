/** @format */

import React, { Fragment } from "react";


import "../styles/sidebar.css";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='sidebar'>
          <div className='content-sidebar d-flex flex-column align-items-center'>
            <img src='../../images/icon/fork.png' alt='menu' />
            <img src='../../images/icon/clipboard.png' alt='clipboard' />
            <img src='../../images/icon/add.png' alt='add' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
