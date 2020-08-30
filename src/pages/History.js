/** @format */

import React, {Fragment} from "react";
import Sidebar from '../components/sidebar'
import HistoryHeader from '../components/headerHistory'
import TotalOrder from '../components/totalOrder'
import Chart from '../components/chart'
import RecentOrder from '../components/recentOrder'

import '../styles/history.css'




const History = ()=>{
    return(
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-9 col-md- p-0'>
              <HistoryHeader />
              <div className='row'>
                <div className='col-1'>
                  <Sidebar/>
                </div>
                <div className='col-11 p-0'>
                  <div className='content'>
                    <TotalOrder/>
                    <Chart/>
                    <RecentOrder/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  
}

export default History;
