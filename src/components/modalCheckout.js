/** @format */

import React from "react";
import { Button, Modal, Row, Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../styles/modalCheckout.css";

const ModalCheckout = (props) => {
  let invoice = new Date().getTime();

  const cart = useSelector((state) => state.cart.data);

  return (
    <Modal
      show={props.showModal}
      onHide={props.handleCloseModal}
      keyboard={false}
      backdrop='static'
      centered>
      <Modal.Body className='show-grid'>
        <Container>
          <Row>
            <Col xs={2} md={4}>
              <h6>Checkout</h6>
            </Col>
            <Col xs={10} md={8}>
              <h6 className='text-reciept'>Reciept no : #{invoice} </h6>
            </Col>
          </Row>

          {/* <Row> */}
          {/* <Col xs={12}> */}
          {/* {" "} */}
          {/* <h6 className='cashier-text'>Cashier:</h6> */}
          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCheckout;
