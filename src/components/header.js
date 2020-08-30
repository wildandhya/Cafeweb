import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className='header d-flex align-items-center justify-content-between '>
          <button>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </button>
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