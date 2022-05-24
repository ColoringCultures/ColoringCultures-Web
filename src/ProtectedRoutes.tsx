import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (user === 'false') {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
