import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/Dashboard" element={<p>Word</p>} />
            <Route path="/Dashboard/Images" element={<p>Images</p>} />
            <Route path="/Dashboard/Statistics" element={<p>Statistics</p>} />
            <Route
              path="/Dashboard/Achievements"
              element={<p>Achievements</p>}
            />
            <Route
              path="/Dashboard/UserFeedback"
              element={<p>User Feedback</p>}
            />
            <Route path="/Dashboard/Ads" element={<p>Ads</p>} />
            <Route
              path="/Dashboard/Subscription"
              element={<p>Subscription</p>}
            />
            <Route path="/Dashboard/Revenue" element={<p>Settings</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
