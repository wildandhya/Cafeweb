/** @format */
import React from "react";
import "../styles/Home.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <div className='btn-add'>
          <button className='print' onClick={handleClose}>
            Print
          </button>
          <button className='email' onClick={handleClose}>
            Send Email
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
