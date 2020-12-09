/** @format */

import React from "react";
import { Button, Modal, Row, Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import "../../styles/modalCheckout.css";

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
      <Modal.Header>
        <div className='header'>
          <div>
            <h6>Checkout</h6>
            <h6 className='cashier-text'>Cashier: Wildan</h6>
          </div>

          <h6 className='text-reciept'>Reciept no : #{invoice} </h6>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <div className='bodyContainer'>
            {cart.map((item) => {
              return (
                <div className='menuWrapp'>
                  <div>
                    <h6 className='cashier-text'>
                      {item.menu}&nbsp;{`${item.qty}x`}
                    </h6>
                  </div>
                  <div>
                    <h6 className='cashier-text'>
                      Rp {item.price.toLocaleString("id-ID")}
                    </h6>
                  </div>
                </div>
              );
            })}
            <div className='menuWrapp'>
              <div>
                <h6 className='cashier-text'>Ppn 10%</h6>
              </div>
              <div>
                <h6 className='cashier-text'>
                  Rp&nbsp;
                  {cart
                    .reduce((total, item) => {
                      return total + item.price * item.qty * 0.1;
                    }, 0)
                    .toLocaleString("id-ID")}
                </h6>
              </div>
            </div>
            <div className='menuWrapp'>
              <div>
                <h6 className='cashier-text'>Total:&nbsp;&nbsp;</h6>
              </div>
              <div>
                {" "}
                <h6>
                  Rp&nbsp;
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
              </div>
            </div>
            <div className='payment'>
              <h6 className='cashier-text'>Payment: Cash</h6>
            </div>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className='footer'>
          <div>
            <Button onClick={props.handleCloseModal}>Print</Button>
          </div>
          <div className='or'>
            <h6>or</h6>
          </div>
          <div>
            <Button>Send Email</Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCheckout;
