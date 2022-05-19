import React from 'react';
import './Dashboard.scss';
import { Outlet, useLocation } from 'react-router-dom';
import NavLink from '../../Navlink';

const Dashboard = () => {
  const location = useLocation();

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
                {location.pathname === '/Dashboard/' ? (
                  <img
                    src={require('../../assets/active dashboard.png')}
                    alt=""
                  />
                ) : (
                  <img src={require('../../assets/Path 2.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Images' ? (
                  <img src={require('../../assets/active images.png')} alt="" />
                ) : (
                  <img src={require('../../assets/Union 2.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Images"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Images
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Statistics' ? (
                  <img
                    src={require('../../assets/active statistics.png')}
                    alt=""
                  />
                ) : (
                  <img src={require('../../assets/Path 19.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Statistics"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Statistics
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Achievements' ? (
                  <img
                    src={require('../../assets/active achievements.png')}
                    alt=""
                  />
                ) : location.pathname === '/Dashboard/Achievements/Edit' ? (
                  <img
                    src={require('../../assets/active achievements.png')}
                    alt=""
                  />
                ) : location.pathname === '/Dashboard/Achievements/Create' ? (
                  <img
                    src={require('../../assets/active achievements.png')}
                    alt=""
                  />
                ) : (
                  <img src={require('../../assets/Path 8.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Achievements"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Achievements
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/UserFeedback' ? (
                  <img
                    src={require('../../assets/active Feedback.png')}
                    alt=""
                  />
                ) : (
                  <img src={require('../../assets/Path 6.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/UserFeedback"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Users Feedback
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Ads' ? (
                  <img src={require('../../assets/active Ads.png')} alt="" />
                ) : location.pathname === '/Dashboard/Ads/EditAds' ? (
                  <img src={require('../../assets/active Ads.png')} alt="" />
                ) : location.pathname === '/Dashboard/Ads/AddAds' ? (
                  <img src={require('../../assets/active Ads.png')} alt="" />
                ) : (
                  <img src={require('../../assets/Union 1.png')} alt="" />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Ads"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Ads
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Subscription' ? (
                  <img
                    src={require('../../assets/active subscription.png')}
                    alt=""
                  />
                ) : (
                  <img
                    src={require('../../assets/Icon feather-package.png')}
                    alt=""
                  />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Subscription"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
                  Subscription
                </NavLink>
              </div>
              <div className="link">
                {location.pathname === '/Dashboard/Revenue' ? (
                  <img
                    src={require('../../assets/active subscription.png')}
                    alt=""
                  />
                ) : (
                  <img
                    src={require('../../assets/Icon feather-package.png')}
                    alt=""
                  />
                )}
                <NavLink
                  inactiveClassName="navlink"
                  to="/Dashboard/Revenue"
                  exact={false}
                  className="navlink"
                  activeClassName="active"
                >
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
