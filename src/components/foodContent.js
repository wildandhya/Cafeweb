/** @format */

import React, { Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import {connect, useDispatch}from 'react-redux'

import {addMenu, deleteMenu} from '../redux/action/cart'

import "../styles/foodcontent.css";

const FoodContent = ({product, addToCart}) => {
  return (
    <Fragment>
      <div className='food-content'>
        <div className='food-header d-flex align-items-center justify-content-between '>
          <div className='flex-grow-2'>
            <h1>Food Items</h1>
          </div>
          <div className=''>
            <input type='text' placeholder='Seacrh'></input>
            <FontAwesomeIcon icon={faSearch} size='2x' />
          </div>
        </div>
        <div className='food-items'>
          <div className='card-img d-flex flex-wrap justify-content-around'>
            {product.map(item => {
              return(
                <>
                <div key={item.id}>
                  <img src={item.image} alt=''onClick={()=>addToCart(item.id, item.menu, item.price, item.image) }/>
                  <h1>{item.menu}</h1>
                  <p>Rp.{item.price}</p>
                </div>
                </>
              )
            })}
          </div>
        </div>
      
      </div>      
    </Fragment>
  ); 
}

const mapStateToProps = (state) => {
  return {
    product: state.product.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => {
      dispatch(addMenu())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodContent) 
