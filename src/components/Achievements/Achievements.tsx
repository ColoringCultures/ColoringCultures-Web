import React from 'react';
import { Outlet } from 'react-router-dom';
import './Achievements.scss';
import NavLink from '../../Navlink';

const Achievements = () => {
  return (
    <div>
      <div className="root-achievement">
        <h1>Achievements</h1>
        <div className="achievement-header">
          <NavLink
            className="Achievement-link"
            to="/Dashboard/Achievements"
            exact={true}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            All
          </NavLink>
          <NavLink
            className="Achievement-link"

            to="Create"
            exact={false}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            + Create Achievement
          </NavLink>
          <NavLink
            className="Achievement-link"
            to="Edit"
            exact={false}
            activeClassName="active"
            inactiveClassName="Achievement-Link"
          >
            Edit Achievement
          </NavLink>
        </div>
        {/* <hr /> */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
