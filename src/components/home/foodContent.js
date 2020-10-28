/** @format */

import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addMenu } from "../../redux/action/cart";

import "../../styles/foodcontent.css";

const FoodContent = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const cart = useSelector((state) => state.cart.data);

  const addToCart = (id, menu, price, image) => {
    const cartItem = cart;
    let alreadyExist = false;
    cartItem.forEach((item) => {
      if (item.id === id) {
        alreadyExist = true;
        item.qty++;
      }
    });
    if (!alreadyExist) {
      const cartData = {
        id: id,
        menu: menu,
        price: price,
        image: image,
        qty: 1,
      };
      dispatch(addMenu(cartData));
    }
  };

  return (
    <Fragment>
      <div className='food-content'>
        <div className='food-items'>
          <div className='card-img d-flex flex-wrap justify-content-around'>
            {product.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <img
                      src={item.image}
                      className='food-img'
                      alt=''
                      onClick={() =>
                        addToCart(item.id, item.menu, item.price, item.image)
                      }
                    />
                    <h1>{item.menu}</h1>
                    <p>Rp.{item.price.toLocaleString("id-ID")}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FoodContent;
