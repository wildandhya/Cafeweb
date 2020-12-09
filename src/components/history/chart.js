/** @format */

import React from "react";

import "../../styles/historyContent.css";

const Chart = () => {
  return (
    <div className='chart'>
      <div className='chart-caption'>
        <h3>Revenue</h3>
        <select name='month' id='month'>
          <option className='month'>Month</option>
        </select>
      </div>
      <div className='tabel'>
        <div className='list-price'>
          <div className='price-content'>
            <p>50k</p>
            <p>40k</p>
            <p>30k</p>
            <p>20k</p>
            <p>10k</p>
            <p>0</p>
          </div>
        </div>
        <div className='month-list'>
          <div className='month-chart'>
            <div className='this-1'></div>
            <div className='last-1'></div>
          </div>
          <div className='month-chart'>
            <div className='this-2'></div>
            <div className='last-2'></div>
          </div>
          <div className='month-chart'>
            <div className='this-3'></div>
            <div className='last-3'></div>
          </div>
          <div className='month-chart'>
            <div className='this-4'></div>
            <div className='last-4'></div>
          </div>
          <div className='month-chart'>
            <div className='this-5'></div>
            <div className='last-5'></div>
          </div>
          <div className='month-chart'>
            <div className='this-6'></div>
            <div className='last-6'></div>
          </div>
          <div className='month-chart'>
            <div className='this-7'></div>
            <div className='last-7'></div>
          </div>
          <div className='month-chart'>
            <div className='this-8'></div>
            <div className='last-8'></div>
          </div>
          <div className='month-chart'>
            <div className='this-9'></div>
            <div className='last-9'></div>
          </div>
          <div className='month-chart'>
            <div className='this-10'></div>
            <div className='last-10'></div>
          </div>
          <div className='month-chart'>
            <div className='this-11'></div>
            <div className='last-11'></div>
          </div>
          <div className='month-chart'>
            <div className='this-12'></div>
            <div className='last-12'></div>
          </div>
        </div>
      </div>
      <div className='chart-desc'>
        <div className='this-year'>
          <span></span>
          <p>This Year</p>
        </div>
        <div className='last-year'>
          <span></span>
          <p>Last Year</p>
        </div>
      </div>
    </div>
  );
};
export default Chart;
