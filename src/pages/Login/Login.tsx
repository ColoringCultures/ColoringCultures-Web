import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="root">
      <div className="color1">
        <h1>Login to your Account</h1>
        <div className="color-flex">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
      <div className="color2"></div>
    </div>
  );
};

export default Login;
