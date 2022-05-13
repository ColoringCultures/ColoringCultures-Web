import React, { useState } from 'react';
import './Login.scss';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      'https://colorculture.herokuapp.com/auth/login/',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        username: username,
        email: email,
        password: password,
      }
      // { withCredentials: true }
    );
    console.log(data);

    // axios.defaults.headers.common['Authorization'] = `Bearer ${data['data']}`;
  };

  return (
    <div className="root">
      <div className="color1">
        <h1>Login to your Account</h1>
        <p>Welcome Boss, kindly input your details</p>
        <form className="color-flex">
          <input type="text" placeholder="Username" onChange={handleUsername} />
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
      <div className="color2">
        <img src={require('../../assets/logo.png')} alt="" />
      </div>
    </div>
  );
};

export default Login;
