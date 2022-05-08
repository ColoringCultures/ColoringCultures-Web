import React from 'react';
import './Login.scss';

const Login = () => {
  console.log('Login');
  return (
    <div className="root">
      <div className="color1">
        <h1>Login to your Account</h1>
        <p>Welcome Boss, kindly input your details</p>
        <div className="color-flex">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
      <div className="color2">
        <img src={require('../../assets/2.png')} alt="" />
      </div>
    </div>
  );
};

export default Login;
