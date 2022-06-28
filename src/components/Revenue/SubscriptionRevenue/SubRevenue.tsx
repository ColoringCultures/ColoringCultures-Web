import React from 'react';
import './SubRevenue.scss';

const SubRevenue = () => {
  return (
    <div>
      <div className="root-subrevenue">
        <div className="revenue-header">
          <div className="image-rev">
            <img
              src={require('../../../assets/43-432060_subscribe-icon-png-subscription-white-icon-png-transparent.png')}
              alt=""
            />
          </div>
          <p>Subscriptions</p>
        </div>
        <div className="revenue-details">
          <p className="revenue-name">Subscription</p>
          <p className="revenue-number">3,254</p>
        </div>
        <div className="revenue-details">
          <p className="revenue-name">Average income sub</p>
          <p className="revenue-number">$13</p>
        </div>
        <div className="revenue-details-bottom">
          <p className="revenue-name">Revenue</p>
          <p className="revenue-number">31,051</p>
        </div>
      </div>
    </div>
  );
};

export default SubRevenue;
