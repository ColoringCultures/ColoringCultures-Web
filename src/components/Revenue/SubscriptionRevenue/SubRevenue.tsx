import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { url } from '../../../api';
import { UserContext } from '../../../UserContext';
import './SubRevenue.scss';

const SubRevenue = () => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState({
    subscription: 0,
    average_sub: 0,
    total_revenue: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/analytics/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setData((data) => ({
            ...data,
            subscription: response.data.data.subscription.total_subscriptions,
            average_sub: response.data.data.subscription.active_sub_revenue,
            total_revenue: response.data.data.subscription.subscription_revenue,
          }));
        });
    };
    fetchData();
  }, [token]);
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
          <p className="sub-head">Subscriptions</p>
          <div className="revenue-drop">
            <p>All</p>
            {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
          </div>
        </div>
        <div className="revenue-details">
          <p className="revenue-name">Subscription</p>
          <p className="revenue-number">${data.subscription}</p>
        </div>
        <div className="revenue-details">
          <p className="revenue-name">Average income sub</p>
          <p className="revenue-number">${data.average_sub}</p>
        </div>
        <div className="revenue-details-bottom">
          <p className="revenue-name">Revenue</p>
          <p className="revenue-number">${data.total_revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default SubRevenue;
