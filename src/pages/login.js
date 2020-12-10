/** @format */

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { loginAction } from "../redux/action/auth";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const dispatch = useDispatch();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error } = useSelector((state) => state.user);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginAction(email, password));
  };

  useEffect(() => {
    if (user.msg === "login success") {
      history.replace("/home");
    } else if (error.success === false) {
      // history.replace("/");
      toast.warning("email or password invalid", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [history, user.msg, error.success]);

  return (
    <div className='Login'>
      <h3>Sign In</h3>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group size='lg' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type='email'
            autoComplete='off'
            placeholder='Masukan email anda'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            placeholder='Masukan password anda'
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size='lg'
          type='submit'
          className='btnSubmit'
          disabled={!validateForm()}
          onClick={handleSubmit}>
          Login
        </Button>
        <div>
          <Link className='nav-link' to={"/Register"}>
            Do you have account? Sign Up
          </Link>
        </div>
      </Form>
    </div>
  );
}
