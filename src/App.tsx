import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './components/root/home';
import Images from './components/Images/Images';
import Statistics from './components/Statistics/Statistics';
import UserFeedback from './components/UserFeedback/UserFeedback';
import Ads from './components/Ads/Ads';
import Subscription from './components/Subscription/Subscription';
import Revenue from './components/Revenue/Revenue';
import Achievements from './components/Achievements/Achievements';
import Root from './components/Achievements/Root/Root';
import EditAchievement from './components/Achievements/EditAchievement/EditAchievement';
import CreateAchievement from './components/Achievements/CreateAchievement/CreateAchievements';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/Dashboard" element={<Home />} />
            <Route path="/Dashboard/Images" element={<Images />} />
            <Route path="/Dashboard/Statistics" element={<Statistics />} />
            <Route path="/Dashboard/Achievements" element={<Achievements />}>
              <Route path="/Dashboard/Achievements" element={<Root />} />
              <Route
                path="/Dashboard/Achievements/Edit"
                element={<EditAchievement />}
              />
              <Route
                path="/Dashboard/Achievements/Create"
                element={<CreateAchievement />}
              />
            </Route>
            <Route path="/Dashboard/UserFeedback" element={<UserFeedback />} />
            <Route path="/Dashboard/Ads" element={<Ads />} />
            <Route path="/Dashboard/Subscription" element={<Subscription />} />
            <Route path="/Dashboard/Revenue" element={<Revenue />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
