/** @format */

import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import "../../styles/modalUpdateProduct.css";

import { addProductAction, fetchProduct } from "../../redux/action/product";
import { useDispatch, useSelector } from "react-redux";

const ModalUpdateProduct = (props) => {
  const dispatch = useDispatch();

  const { uploadMenu } = useSelector((state) => state.product);

  const [data, setData] = useState({
    menu: "",
    image: "",
    price: "",
  });

  const [msg, setMsg] = useState(false);

  useEffect(() => {
    if (uploadMenu === true) {
      dispatch(fetchProduct());
    }
  }, [uploadMenu, dispatch]);

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
                  value={props.product.menu}
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
                  // value={props.product.image.name}
                  // // label={data.image.name}
                  className='input-image'
                  onChange={(x) => {
                    console.log(x);
                    setData({ ...data, image: x.target.files[0] });
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
                  value={props.product.price}
                  className='input-price'
                  onChange={(x) => {
                    setData({ ...data, price: x.target.value });
                  }}
                />
              </Col>
            </Form.Group>
          </Form.Group>
          {msg === true ? <h6 className='msg'>You Should Input All</h6> : null}
        </Modal.Body>
        <Modal.Footer className='modal-hide-border'>
          <Button className='cancelModal' onClick={props.handleCloseModal}>
            Cancel
          </Button>
          <Button
            className='addModal'
            onClick={() => {
              if (
                data.menu === "" &&
                data.image === "" &&
                data.price === "" &&
                data.category_id === ""
              ) {
                setMsg(true);
              } else if (
                data.menu === "" ||
                data.image === "" ||
                data.price === "" ||
                data.category_id === ""
              ) {
                setMsg(true);
              } else {
                setMsg(false);
                dispatch(
                  addProductAction(
                    data.menu,
                    data.image,
                    data.price,
                    data.category_id
                  )
                );
                setTimeout(() => {
                  props.handleCloseModal();
                }, 500);
              }
            }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalUpdateProduct;
