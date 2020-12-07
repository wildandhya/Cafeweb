/** @format */

import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../../redux/action/cart";
import { editMenuAction } from "../../redux/action/product";
import { Button } from "react-bootstrap";
import ModalUpdateMenu from "../Modal/modalUpdateProduct";
import ModalDeleteMenu from "../Modal/modalDeleteProduct";
import "../../styles/foodcontent.css";

const FoodContent = () => {
  const dispatch = useDispatch();
  const { product, editItemState } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.data);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const handleShowModalDelete = () => setShowModalDelete(true);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalUpdate = () => setShowModalUpdate(true);
  const handleCloseModalUpdate = () => setShowModalUpdate(false);
  const user = useSelector((state) => state.user.user.data[0]);

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

  if (user.level_id === 2) {
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
                          onClick={() => {
                            handleShowModalDelete();
                            dispatch(
                              editMenuAction(
                                item.id,
                                item.menu,
                                item.price,
                                item.image
                              )
                            );
                          }}>
                          Delete
                        </Button>
                        <Button
                          className='btnUpdate'
                          onClick={() => {
                            handleShowModalUpdate();
                            dispatch(
                              editMenuAction(
                                item.id,
                                item.menu,
                                item.price,
                                item.image
                              )
                            );
                          }}>
                          Update
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })}
              <ModalUpdateMenu
                product={editItemState}
                showModal={showModalUpdate}
                handleCloseModal={handleCloseModalUpdate}
              />
              <div>
                <ModalDeleteMenu
                  product={editItemState}
                  showModal={showModalDelete}
                  handleCloseModal={handleCloseModalDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else if (user.level_id === 1) {
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
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
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
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default FoodContent;
