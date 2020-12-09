/** @format */

import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import { fetchProduct } from "../../redux/action/product";
import { deleteProductApi } from "../../utils/http";

import "../../styles/modalUpdateProduct.css";

import { updateProductApi } from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";

const ModalDeleteProduct = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      let response = await deleteProductApi(props.product.id);
      console.log(response.data);
      if (response.data.success === true) {
        dispatch(fetchProduct());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleCloseModal}
        keyboard={false}
        backdrop='static'
        centered>
        <Modal.Body>
          <h4>Are you sure to delete this menu?</h4>
        </Modal.Body>
        <Modal.Footer className='modal-hide-border'>
          <Button className='cancelModal' onClick={props.handleCloseModal}>
            Cancel
          </Button>
          <Button
            className='addModal'
            onClick={() => {
              handleSubmit();
              setTimeout(() => {
                props.handleCloseModal();
              }, 500);
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDeleteProduct;
