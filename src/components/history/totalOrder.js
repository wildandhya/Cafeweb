/** @format */

import React from "react";

import { connect } from "react-redux";

import "../../styles/totalOrder.css";

const TotalOrder = ({ history }) => {
  return (
    <div>
      <div className='card-group'>
        <div className='card-pink'>
          <div className='title'>
            <p className='today'>Today's Income</p>
            <h2>{history.todayIncomes}</h2>
            <p>+2% Yesterday</p>
          </div>
        </div>
        <div className='card-blue'>
          <div className='title'>
            <p className='today'>Orders</p>
            <h2>{history.order}</h2>
            <p>+3% Last Week</p>
          </div>
        </div>
        <div className='card-violet'>
          <div className='title'>
            <p className='today'>This Year's Income</p>
            <h2>Rp.{history.yearIncome}</h2>
            <p>+10% Last Year</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    history: state.history.data,
  };
};
export default connect(mapStateToProps)(TotalOrder);
