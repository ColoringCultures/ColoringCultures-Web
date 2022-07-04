import { useEffect, useContext, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

const Login = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { setToken, setUser, user, token, setUserName } =
    useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
    setUserName(e.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (login === true) {
      navigate('/Dashboard/');
    }
  }, [navigate, login]);

  useEffect(() => {
    if (token) {
      setUser('true');
      setLogin(true);
    }
  }, [setUser, token]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post('https://colorculture.herokuapp.com/auth/login/', {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status_code === 400) {
          setError('Wrong username, email or password');
        }
        setToken(response.data.data.key);
        setLoading(false);
      })
      .catch((err) => {
        setErrMessage(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      {user === 'false' && (
        <div className="mainer-root">
          <div className="main-root">
            <div className="login-border">
              <h1>LogIn to your Account</h1>
              <div className="root">
                <div className="color1">
                  <form className="color-flex">
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={handleUsername}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      onChange={handleEmail}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={handlePassword}
                      required
                    />
                    <p className="error-message">{error}</p>
                    {errMessage && (
                      <p className="error-network-message">{errMessage}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </form>
                  <div className="forgotPassword">
                    <div className="bar"></div>
                    <h4 className="forgotLink">
                      <a href="/">Forgot password?</a>{' '}
                    </h4>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="color2">
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
