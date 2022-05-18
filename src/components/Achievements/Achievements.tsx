import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Achievements.scss';

const Achievements = () => {
  return (
    <div>
      <div className="root-achievement">
        <h1>Achievements</h1>
        <div className="achievement-header">
          <NavLink className="Achievement-link" to="/Dashboard/Achievements">
            All
          </NavLink>
          <NavLink
            className="Achievement-link"
            to="Achievements/Create"
          >
            + Create Achievement
          </NavLink>
          <NavLink
            className="Achievement-link"
            to="Achievements/Edit"
          >
            Edit Achievement
          </NavLink>
        </div>
        <hr />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
