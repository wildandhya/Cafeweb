/** @format */

import React, { Fragment } from "react";
import { connect } from "react-redux";

import Sidebar from "../components/sidebar";
import HistoryHeader from "../components/history/headerHistory";
import TotalOrder from "../components/history/totalOrder";
import Chart from "../components/history/chart";
import RecentOrder from "../components/history/recentOrder";

import {
  getIncomeToday,
  getOrderByWeek,
  getIncomeByYear,
} from "../redux/action/history";

import "../styles/history.css";

class History extends React.Component {
  componentDidMount() {
    this.props.incomeToday();
    this.props.orderByWeek();
    this.props.incomeByYear();
  }
  render() {
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <HistoryHeader />
            <div className='row'>
              <div className='col-1'>
                <Sidebar />
              </div>
              <div className='col-11 p-0'>
                <div className='content'>
                  <TotalOrder />
                  <Chart />
                  <RecentOrder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incomeToday: () => {
      dispatch(getIncomeToday());
    },
    orderByWeek: () => {
      dispatch(getOrderByWeek());
    },
    incomeByYear: () => {
      dispatch(getIncomeByYear());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
