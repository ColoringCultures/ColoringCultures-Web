import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLink from '../../Navlink';
import './UserFeedback.scss';

const UserFeedback = () => {
  return (
    <div>
      <div className="root-Feedback">
        <h1>Feedbacks</h1>
        <div className="Feedback-header">
          <NavLink
            className="Feedback-link"
            to="/Dashboard/UserFeedback"
            exact={true}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
          >
            Bug Report
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="FeatureRequests"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
          >
            Feature Requests
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="Praise"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
          >
            Praise
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="Suggestions"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
          >
            Suggestions
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
