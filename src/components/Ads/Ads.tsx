import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLink from '../../Navlink';
import './Ads.scss';

const Ads = () => {
  return (
    <div>
      <div className="root-Ads">
        <h1>Adss</h1>
        <div className="Ads-header">
          <NavLink
            className="Ads-link"
            to="/Dashboard/Ads"
            exact={true}
            activeClassName="active"
            inactiveClassName="Ads-Link"
          >
            All
          </NavLink>
          <NavLink
            className="Ads-link"
            to="AddAds"
            exact={false}
            activeClassName="active"
            inactiveClassName="Ads-Link"
          >
            + Add Ads
          </NavLink>
          <NavLink
            className="Ads-link"
            to="EditAds"
            exact={false}
            activeClassName="active"
            inactiveClassName="Ads-Link"
          >
            Edit Ads
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Ads;
