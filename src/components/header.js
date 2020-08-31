/** @format */

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className='header d-flex align-items-center justify-content-between '>
          <img src='../../images/icon/menu (1).png' alt='menu' />
          <div className='header-title'>
            <h1>Food Items</h1>
          </div>
          <div className='seacrh'>
            <FontAwesomeIcon icon={faSearch} size='2x' />
          </div>
        </div>
      </>
    );
  }
}
export default Header;
