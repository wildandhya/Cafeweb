/** @format */

import React, { useState } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { fetchProduct } from "../../redux/action/product";

import "../../styles/modalUpdateProduct.css";

import { updateProductApi } from "../../utils/http";
import { useDispatch} from "react-redux";

const ModalUpdateProduct = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    menu: props.product.name,
    image: props.product.image,
    price: props.product.price,
  });

  console.log(props.product.name);
  const handleSubmit = async () => {
    try {
      let response = await updateProductApi(
        props.product.id,
        data.menu,
        data.image,
        data.price
      );
      console.log(response.data.data.status);
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
        <Modal.Header className='modal-hide-border'>
          <Modal.Title>Update Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm='2' className='label-title'>
                Name
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type=''
                  placeholder=''
                  value={data.menu}
                  className='input-name'
                  onChange={(x) => {
                    setData({ ...data, menu: x.target.value });
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formPlaintextImage'>
              <Form.Label column sm='2' className='label-title'>
                Image
              </Form.Label>
              <Col sm='10'>
                <Form.File
                  custom
                  id='image'
                  value={data.image}
                  className='input-image'
                  onChange={(x) => {
                    setData({ ...data, image: x.target.file });
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm='2' className='label-title'>
                Price
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type=''
                  placeholder=''
                  value={data.price}
                  className='input-price'
                  onChange={(x) => {
                    setData({ ...data, price: x.target.value });
                  }}
                />
              </Col>
            </Form.Group>
          </Form.Group>
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalUpdateProduct;
