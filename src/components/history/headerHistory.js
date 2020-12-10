/** @format */

import React from "react";

import "../../styles/headerHistory.css";

const HistoryHeader = () => {
  return (
    <div className='header-history'>
      <div className='row'>
        <div className='col-1'>
          <img src='../../images/icon/menu (1).png' alt='menu' />
        </div>
        <div className='col-10'>
          <h1>History</h1>
        </div>
      </div>
    </div>
  );
};
export default HistoryHeader;
