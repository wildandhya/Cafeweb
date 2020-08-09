/** @format */

import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/foodcontent.css";
import API from "../services/api";
//
class FoodContent extends React.Component {
  state = {
    product: [],
  };
  getProductApi = () => {
    API.getProductItem().then((result) => {
      this.setState({
        product: result,
      });
    });
  };
  componentDidMount() {
    this.getProductApi();
  }

  addToCart = (data) => {
    console.log(data);
  };
  render() {
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
              {this.state.product.map((product) => {
                return (
                  <Fragment>
                    <figure onClick={this.addToCart}>
                      <img className='foodImage' src={product.image} alt='' />
                      <h1 className='foodName'>{product.menu}</h1>
                      <p className='foodPrice'>Rp.{product.price}</p>
                    </figure>
                  </Fragment>
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
