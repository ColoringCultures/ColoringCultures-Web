import React from 'react';
import './Dashboard.scss';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-root">
      <div className="navbar-root">
        <div className="navbar">
          <div className="admin-details">
            <img src={require('../../assets/Ellipse 1.png')} alt="" />
            <h1>Omodu Uche</h1>
            <p>Admin</p>
          </div>
          <div>
            <h1 className="menu">Menu</h1>
            <div className="links">
              <div className="link">
                <img src={require('../../assets/Path 2.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/">
                  Dashboard
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Union 2.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/Images">
                  Images
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Path 19.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/Statistics">
                  Statistics
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Path 8.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/Achievements">
                  Achievements
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Path 6.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/UserFeedback">
                  Users Feedback
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Union 1.png')} alt="" />
                <NavLink className="navlink" to="/Dashboard/Ads">
                  Ads
                </NavLink>
              </div>
              <div className="link">
                <img
                  src={require('../../assets/Icon feather-package.png')}
                  alt=""
                />
                <NavLink className="navlink" to="/Dashboard/Subscription">
                  Subscription
                </NavLink>
              </div>
              <div className="link">
                <img
                  src={require('../../assets/Icon feather-package.png')}
                  alt=""
                />
                <NavLink className="navlink" to="/Dashboard/Revenue">
                  Revenue
                </NavLink>
              </div>
              <div className="link">
                <img src={require('../../assets/Path 29.png')} alt="" />
                <p>Sign Out</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
