import React from 'react'

import '../styles/historyContent.css'

 const Chart =() => {
    return (
        
            <div class="chart">
                    <div class="chart-caption">
                        <h3>Revenue</h3>
                        <select name="month" id="month">
                            <option class="month" selected>Month</option>
                        </select>
                    </div>
                    <div class="tabel">
                        <div class="list-price">
                            <div class="price-content">
                                <p>50k</p>
                                <p>40k</p>
                                <p>30k</p>
                                <p>20k</p>
                                <p>10k</p>
                                <p>0</p>
                            </div>
                        </div>
                        <div class="month-list">
                            <div class="month-chart">
                                <div class="this-1"></div>
                                <div class="last-1"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-2"></div>
                                <div class="last-2"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-3"></div>
                                <div class="last-3"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-4"></div>
                                <div class="last-4"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-5"></div>
                                <div class="last-5"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-6"></div>
                                <div class="last-6"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-7"></div>
                                <div class="last-7"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-8"></div>
                                <div class="last-8"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-9"></div>
                                <div class="last-9"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-10"></div>
                                <div class="last-10"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-11"></div>
                                <div class="last-11"></div>
                            </div>
                            <div class="month-chart">
                                <div class="this-12"></div>
                                <div class="last-12"></div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-desc">
                        <div class="this-year">
                            <span></span>
                            <p>This Year</p>
                        </div>
                        <div class="last-year">
                            <span></span>
                            <p>Last Year</p>
                        </div>
                    </div>
                </div>

    )
}
export default Chart