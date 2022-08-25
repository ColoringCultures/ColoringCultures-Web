import './home.scss';
import { useContext, useEffect, useState } from 'react';
import VisitorsPerDay from './VisitorsPerDay/VisitorsPerDay';
import AchievementsPerDay from './AchievementsPerDay/AchievementsPerDay';
import FeedbacksPerDay from './FeedbacksPerDay/FeedbacksPerDay';
import MonthlyVisitors from '../Statistics/MonthlyVisitors/MonthlyVisitors';
import RevenueChart from '../Revenue/RevenueChart/RevenueChart';
import ImagesInfo from './ImagesInfo/ImagesInfo';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import { url } from '../../api';

const Home = () => {
  const { token } = useContext(UserContext);
  const [achievements, setAchievements] = useState('');
  const [feedback, setFeedback] = useState('');
  const [visitors, setVisitors] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/analytics/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setAchievements(response.data.data.achivements.achivements_per_day);
          setFeedback(response.data.data.feedback.feedbacks_per_day);
          setVisitors(response.data.data.visitors.total_vistors_day);
        });
    };
    fetchData();
  }, [token]);


  return (
    <div className="dash-home">
      <div className="root-h1">
        <div className="VAF">
          <VisitorsPerDay VPD={visitors} />
          <AchievementsPerDay APD={achievements} />
          <FeedbacksPerDay FPD={feedback} />
        </div>
        <div className="MV-home">
          <MonthlyVisitors />
        </div>
        <div className="AR-home">
          <RevenueChart />
        </div>
      </div>
      <div className="root-h2">
        <ImagesInfo />
      </div>
    </div>
  );
};

export default Home;
