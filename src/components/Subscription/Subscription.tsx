import React from 'react';
import { Outlet } from 'react-router-dom';
import './Subscription.scss';
import NavLink from '../../Navlink';

const Subscription = () => {
  return (
    <div>
      <div className="root-achievement">
        <h1>Subscription Plans</h1>
        <div className="achievement-header">
          <NavLink
            className="Achievement-link"
            to="/Dashboard/Subscription"
            exact={true}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            Plans
          </NavLink>
          <NavLink
            className="Achievement-link"
            to="AddPlans"
            exact={false}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            + Add Plans
          </NavLink>
          <NavLink
            className="Achievement-link"
            to="EditPlans"
            exact={false}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            Edit Plans
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
