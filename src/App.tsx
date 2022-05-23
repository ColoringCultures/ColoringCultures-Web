import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { useState } from 'react';
import { UserContext } from './UserContext';

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  return (
    <Router>
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
