import React from "react";

import '../styles/login.css'

const Login =() => {
  return (
    <div className='container'>
        <div className='login'>
            <div className="login-wrapp">
                <h1>Sign in</h1>
                <from className="form" onSubmit={(e) => { e.preventDefault();}}>
                    <div className="username">
                        <label className="label-username">UserName</label>
                        <input type='text' placeholder='your username' />
                    </div>
                    <div className="password">
                        <label className="label-password">Password</label>
                        <input type='password' placeholder="your password" />
                    </div>
                    <button type='submit'>Login</button>
                </from>
            </div>
        </div>
    </div>
  );
}

export default Login