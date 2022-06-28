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
import ProtectedRoutes from './ProtectedRoutes';
import BugReport from './components/UserFeedback/BugReport/BugReport';
import FeatureRequests from './components/UserFeedback/FeatureRequests/FeatureRequests';
import Praise from './components/UserFeedback/Praise/Praise';
import Suggestions from './components/UserFeedback/Suggestions/Suggestions';
import EditEmpty from './components/Achievements/EditEmpty/EditEmpty';
import EmptyAds from './components/Ads/EmptyAds/EmptyAds';
import EmptySubscription from './components/Subscription/EmptySubscription/EmptySubscription';

export const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/Dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '',
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
              { path: 'Edit', element: <EditEmpty /> },
              { path: 'Edit/:id', element: <EditAchievement /> },
            ],
          },
          {
            path: 'UserFeedback',
            element: <UserFeedback />,
            children: [
              { path: '', element: <BugReport /> },
              { path: 'FeatureRequests', element: <FeatureRequests /> },
              { path: 'Praise', element: <Praise /> },
              { path: 'Suggestions', element: <Suggestions /> },
            ],
          },
          {
            path: 'Ads',
            element: <Ads />,
            children: [
              { path: '', element: <RootAds /> },
              { path: 'AddAds', element: <AddAds /> },
              { path: 'EditAds/:id', element: <EditAds /> },
              { path: 'EditAds', element: <EmptyAds /> },
            ],
          },
          {
            path: 'Subscription',
            element: <Subscription />,
            children: [
              { path: '', element: <Plans /> },
              { path: 'AddPlans', element: <AddPlans /> },
              { path: 'EditPlans', element: <EmptySubscription /> },
              { path: 'EditPlans/:id', element: <EditPlans /> },
            ],
          },
          {
            path: 'Revenue',
            element: <Revenue />,
          },
        ],
      },
    ],
  },
];
const Routes = () => {
  let element = useRoutes(routes);
  return element;
};

export default Routes;
