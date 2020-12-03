/** @format */

import React from "react";
import { Button, Modal, Row, Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../styles/modalCheckout.css";

const ModalCheckout = (props) => {
  let invoice = new Date().getTime();

  const cart = useSelector((state) => state.cart.data);
  console.log(cart);

  return (
    <Modal
      show={props.showModal}
      onHide={props.handleCloseModal}
      keyboard={false}
      backdrop='static'
      centered>
      <Modal.Header>
        <Container>
          <div className='header'>
            <Row>
              <Col xs={4} md={8}>
                <h6>Checkout</h6>
                <h6 className='cashier-text'>Cashier:</h6>
              </Col>
              <Col xs={8} md={4}>
                <h6 className='text-reciept'>Reciept no : #{invoice} </h6>
              </Col>
            </Row>
          </div>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <div>
            {cart.map((item) => {
              return (
                <Row>
                  <Col xs={8}>
                    <h6 className='cashier-text'>
                      {item.menu}&nbsp;{`${item.qty}x`}
                    </h6>
                  </Col>
                  <Col xs={4}>
                    <h6 className='cashier-text'>
                      Rp {item.price.toLocaleString("id-ID")}
                    </h6>
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col xs={8}>
                <h6 className='cashier-text'>Ppn 10%</h6>
              </Col>
              <Col xs={4}>
                <h6 className='cashier-text'>
                  Rp&nbsp;
                  {cart
                    .reduce((total, item) => {
                      return total + item.price * item.qty * 0.1;
                    }, 0)
                    .toLocaleString("id-ID")}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h6 className='cashier-text'>
                  Total:&nbsp;&nbsp;Rp&nbsp;
                  {cart
                    .reduce((total, item) => {
                      return (
                        total +
                        item.price * item.qty * 0.1 +
                        item.price * item.qty
                      );
                    }, 0)
                    .toLocaleString("id-ID")}
                </h6>
              </Col>
              <Col xs={12}>
                <h6 className='cashier-text'>Payment: Cash</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button onClick={props.handleCloseModal}>Print</Button>
          </Col>
          <Col>
            <h6>Or</h6>
          </Col>
          <Col>
            <Button>Send Email</Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCheckout;
