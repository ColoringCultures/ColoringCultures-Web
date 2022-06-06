import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { UserContext } from './UserContext';
import useSessionStorage from './useSessionStorage';

function App() {
  const [token, setToken] = useSessionStorage('token', '');
  const [user, setUser] = useSessionStorage('user', 'false');

  return (
    <Router>
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
