import './App.css';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
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
import RootAds from './components/Ads/rootAds/RootAds';
import AddAds from './components/Ads/AddAds/AddAds';
import EditAds from './components/Ads/EditAds/EditAds';
import Plans from './components/Subscription/root/Plans';
import EditPlans from './components/Subscription/EditPlans/EditPlans';
import AddPlans from './components/Subscription/AddPlans/AddPlans';
import './UserContext';
import { UserContext } from './UserContext';

export const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Images',
        element: <Images />,
      },
      {
        path: 'Statistics',
        element: <Statistics />,
      },
      {
        path: 'Achievements',
        element: <Achievements />,
        children: [
          { path: '', element: <Root /> },
          { path: 'Create', element: <CreateAchievement /> },
          { path: 'Edit', element: <EditAchievement /> },
        ],
      },
      {
        path: 'UserFeedback',
        element: <UserFeedback />,
      },
      {
        path: 'Ads',
        element: <Ads />,
        children: [
          { path: '', element: <RootAds /> },
          { path: 'AddAds', element: <AddAds /> },
          { path: 'EditAds', element: <EditAds /> },
        ],
      },
      {
        path: 'Subscription',
        element: <Subscription />,
        children: [
          { path: '', element: <Plans /> },
          { path: 'EditPlans', element: <EditPlans /> },
          { path: 'AddPlans', element: <AddPlans /> },
        ],
      },
      {
        path: 'Revenue',
        element: <Revenue />,
      },
    ],
  },
];

function App() {
  const [token, setToken] = useState('');
  let element = useRoutes(routes);
  if (!token) {
    return <Login setToken={setToken} token={token} />;
  }
  return (
    <UserContext.Provider value={[token, setToken]}>
      {element}
    </UserContext.Provider>
  );
}

export default App;
