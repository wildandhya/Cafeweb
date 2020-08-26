/** @format */

import React from "react";

export default function login() {
  return (
    <div className='container'>
      <h1>sign in</h1>
      <from
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <label>UserName</label>
        <input type='text' />
        <label>Password</label>
        <input type='password' />
        <button type='submit'>login</button>
      </from>
    </div>
  );
}
