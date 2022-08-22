import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { url } from '../../api';
import { UserContext } from '../../UserContext';
import RevenueChart from '../Revenue/RevenueChart/RevenueChart';
import AdsStats from './AdsStats/AdsStats';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import MonthlyVisitors from './MonthlyVisitors/MonthlyVisitors';
import './Statistics.scss';
import SubStats from './SubStats/SubStats';
import Visitors from './Visitors/Visitors';

const Statistics = () => {
  let allow: boolean = true;
  const { token } = useContext(UserContext);
  const [adStats, setAdstats] = useState({});
  const [feedback, setFeedback] = useState({});
  const [visitors, setVisitors] = useState({});
  const [subscription, setSubscription] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/analytics/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setAdstats(response.data.data.advertisements);
          setFeedback(response.data.data.feedback);
          setVisitors(response.data.data.visitors);
          setSubscription(response.data.data.subscription);
        });
    };
    fetchData();
  }, [token]);
  return (
    <div className="statistics-main-root">
      <div className="MV1-stats">
        <MonthlyVisitors />
        <div className="ARF">
          <AdsStats allow={allow} stats={adStats} />
          <div className="ARF-ss">
            <RevenueChart />
            <FeedbackStats stats={feedback} />
          </div>
        </div>
      </div>
      <div className="VISSUB">
        <Visitors stats={visitors} />
        <SubStats stats={subscription} />
      </div>
    </div>
  );
};

export default Statistics;
