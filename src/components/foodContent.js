/** @format */

import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import "../styles/foodcontent.css";

const FoodContent = () => {
  const product = useSelector((state) => state.product.data);
  return (
    <Fragment>
      <div className='food-content'>
        <div className='food-items'>
          <div className='card-img d-flex flex-wrap justify-content-around'>
            {product.map((item) => {
              return (
                <div className='card-food' key={item.id}>
                  <img src={item.image} alt={item.menu} />
                  <h1>{item.menu}</h1>
                  <p>Rp.{item.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FoodContent;
