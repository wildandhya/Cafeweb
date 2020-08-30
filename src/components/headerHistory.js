import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HistoryHeader = () =>{
    return (
        <div className="header">
            <div className='row'>
                <div className='col-2'>
                    <button>
                        <FontAwesomeIcon icon={faBars} size='2x' />
                    </button>
                </div>
                <div className='col-10'>
                    <h1>History</h1>
                </div>
            </div>
        </div>
    )
}
export default HistoryHeader
