import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { UserContext } from './UserContext';
import useSessionStorage from './useSessionStorage';

function App() {
  const [token, setToken] = useSessionStorage('', '');
  const [user, setUser] = useSessionStorage('false', '');
  console.log(token);

  return (
    <Router>
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
