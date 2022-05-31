import { useContext, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { setToken, setUser, user, token } = useContext(UserContext);

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
    const response = await axios.post(
      'https://colorculture.herokuapp.com/auth/login/',
      {
        username,
        email,
        password,
      }
      // withCredentials: true
    );
    console.log(response);
    if (response.data.status_code === 400) {
      setError('Wrong username, email or password');
    }
    setToken(response.data.data.key);
    if (token) {
      setUser('true');
    }
  };

  if (user === 'true') {
    return <Navigate to="/Dashboard" replace />;
  }

  return (
    <>
      {user === 'false' ? (
        <div className="main-root">
          <div className="root">
            <div className="color1">
              <h1>Login to your Account</h1>
              <p>Welcome Boss, kindly input your details</p>
              <form className="color-flex">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={handleUsername}
                />
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
                <p className="error-message">{error}</p>
                <button type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </form>
            </div>
            <div className="color2">
              <img src={require('../../assets/logo.png')} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/Dashboard" replace />
      )}
    </>
  );
};

export default Login;
