/** @format */

import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../../redux/action/cart";
import { Button, Alert } from "react-bootstrap";
import ModalUpdateMenu from "../Modal/modalUpdateProduct";

import "../../styles/foodcontent.css";

const FoodContent = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.data);
  const [ShowAlert, setShowAlert] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
                      className='image'
                      alt=''
                      onClick={() =>
                        addToCart(item.id, item.menu, item.price, item.image)
                      }
                    />
                    <h1>{item.menu}</h1>
                    <p>Rp.{item.price.toLocaleString("id-ID")}</p>
                    <div className='btnWrapper'>
                      <Button
                        className='btnDelete'
                        onClick={() => setShowAlert(true)}>
                        Delete
                      </Button>
                      <Button className='btnUpdate' onClick={handleShowModal}>
                        Update
                      </Button>
                    </div>
                  </div>
                  <ModalUpdateMenu
                    product={(item.menu, item.image.name, item.price)}
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                  />
                </>
              );
            })}
          </div>
        </div>

        {/* {ShowAlert ? (
          <Alert variant='warning' onClose={() => setShowAlert(false)}>
            <p>are you sure want delete this menu?</p>
            <Button>cancel</Button>
            <Button>Ok</Button>
          </Alert>
        ) : null} */}
      </div>
    </Fragment>
  );
};

export default FoodContent;
