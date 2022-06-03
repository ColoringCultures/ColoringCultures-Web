import React from 'react';
import { Outlet } from 'react-router-dom';
import './Subscription.scss';
import NavLink from '../../Navlink';

const Subscription = () => {
  return (
    <div>
      <div className="root-subscription">
        <h1>Subscription Plans</h1>
        <div className="subscription-header">
          <NavLink
            className="subscription-link"
            to="/Dashboard/Subscription"
            exact={true}
            activeClassName="active"
            inactiveClassName="subscription-Link"
          >
            Plans
          </NavLink>
          <NavLink
            className="subscription-link"
            to="AddPlans"
            exact={false}
            activeClassName="active"
            inactiveClassName="subscription-Link"
          >
            + Add Plans
          </NavLink>
          <NavLink
            className="subscription-link"
            to="EditPlans"
            exact={false}
            activeClassName="active"
            inactiveClassName="subscription-Link"
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
