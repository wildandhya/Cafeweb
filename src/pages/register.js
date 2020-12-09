/** @format */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/register.css";
import { Link } from "react-router-dom";
import { registerApi } from "../utils/http";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  function validateForm() {
    return (
      form.username.length > 0 &&
      form.email.length > 0 &&
      form.password.length > 0
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await registerApi(form);
      console.log(response);
      if (response.data.data.msg === "Register succses") {
        setForm({
          ...form,
          username: "",
          email: "",
          password: "",
        });
        toast("Register Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Sorry, your email already exist ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='register'>
      <h3>Sign Up</h3>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group size='lg' controlId='email'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type='name'
            placeholder='Masukan username anda'
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Masukan email anda'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Masukan password anda'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Form.Group>
        <Button
          block
          size='lg'
          type='submit'
          className='btnSubmit'
          disabled={!validateForm()}
          onClick={handleSubmit}>
          Register
        </Button>
        <div>
          <Link className='nav-link' to={"/"}>
            already have account? Sign In
          </Link>
        </div>
      </Form>
    </div>
  );
}
