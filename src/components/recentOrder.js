import React from 'react'

import '../styles/historyContent.css'

 const RecentOrder = ()=> {
    return (
        <div class="recent-order">
        <div class="recent-caption">
            <h3>Recent Orders</h3>
            <select name="day" id="day">
                <option selected>Today</option>
            </select>
        </div>
        <table>
            <tr>
                <th>INVOICES</th>
                <th>CASHIER</th>
                <th>DATE</th>
                <th>ORDER</th>
                <th>AMOUNT</th>
            </tr>
            <tr>
                <td>#10928</td>
                <td>Cashier 1</td>
                <td>15 Oktober 2020</td>
                <td>Coffe Latte</td>
                <td>Rp.15.000</td>
            </tr>
        </table>
    </div>
    )
}

export default RecentOrder
