/** @format */

import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

import "../styles/Home.css";

class FoodContent extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:8000/product").then((res) => {
      console.log(res.data);
      this.setState({
        product: res.data,
      });
    });
  }
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
            <div className='card-img d-flex flex-wrap justify-content-between'>
              {this.state.product.map((product) => {
                return (
                  <>
                    <img
                      src={product.image}
                      className='card-img-top'
                      alt='...'
                    />
                    <h1></h1>
                    <p className='card-text'></p>
                  </>
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
