/** @format */

import React from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import "../styles/modalAddProduct.css";

const modalAddProduct = (props) => {
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleCloseModal}
      keyboard={false}
      backdrop='static'
      centered>
      <Modal.Header className='modal-hide-border'>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm='2' className='label-title'>
              Name
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='' placeholder='' className='input-name' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm='2' className='label-title'>
              Image
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='' placeholder='' className='input-image' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm='2' className='label-title'>
              Price
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='' placeholder='' className='input-price' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm='2' className='label-title'>
              Category
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                as='select'
                defaultValue='Category'
                className='input-category'>
                <option>Category</option>
                <option>Drink</option>
                <option>Food</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='modal-hide-border'>
        <Button className='cancelModal' onClick={props.handleCloseModal}>
          Cancel
        </Button>
        <Button className='addModal'>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default modalAddProduct;
