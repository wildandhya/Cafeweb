/** @format */

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../../styles/header.css";

const Header = ()=> {
    return (
      <>
        <div className='header d-flex align-items-center justify-content-between '>
          <img src='../../images/icon/menu (1).png' alt='menu' className='bar' />
          <div className='header-title'>
            <h1>Food Items</h1>
          </div>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} size='2x' />
          </div>
        </div>
      </>
    );
}
export default Header;
