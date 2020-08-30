import React from 'react'

import '../styles/historyContent.css'

const TotalOrder =() => {
    return (
        <div>
            <div class="card-group">
                    <div class="card-pink">
                        <div class="title">
                            <p class="today">Today's Income</p>
                            <h2>Rp.1.000.000</h2>
                            <p>+2% Yesterday</p>
                        </div>
                    </div>
                    <div class="card-blue">
                        <div class="title">
                            <p class="today">Orders</p>
                            <h2>3.730</h2>
                            <p>+3% Last Week</p>
                        </div>
                    </div>
                    <div class="card-violet">
                        <div class="title">
                            <p class="today">This Year's Income</p>
                            <h2>Rp.10.000.000</h2>
                            <p>+10% Last Year</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TotalOrder
