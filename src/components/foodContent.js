/** @format */

import React, { Fragment } from "react";

import "../styles/foodcontent.css";

//
class FoodContent extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='food-content'>
          <div className='food-items'>
            <div className='card-img d-flex flex-wrap justify-content-around'>
              {this.props.data.map((item) => {
                return (
                  <figure key={item.id}>
                    <img
                      className='foodImage'
                      src={item.image}
                      alt=''
                      onClick={() =>
                        this.props.addToCart(
                          item.id,
                          item.menu,
                          item.price,
                          item.image,
                          item.qty
                        )
                      }
                    />
                    <h1 className='foodName'>{item.menu}</h1>
                    <p className='foodPrice'>Rp.{item.price}</p>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FoodContent;
