import './home.scss';
import AdsStats from '../Statistics/AdsStats/AdsStats';
import VisitorsPerDay from './VisitorsPerDay/VisitorsPerDay';
import AchievementsPerDay from './AchievementsPerDay/AchievementsPerDay';
import FeedbacksPerDay from './FeedbacksPerDay/FeedbacksPerDay';
import MonthlyVisitors from '../Statistics/MonthlyVisitors/MonthlyVisitors';
import RevenueChart from '../Revenue/RevenueChart/RevenueChart';

const home = () => {
  let allow: boolean = false;
  return (
    <div className="dash-home">
      <div className="PD-grid">
        <VisitorsPerDay />
      </div>
      <div className="PD-grid">
        <AchievementsPerDay />
      </div>
      <div className="PD-grid">
        <FeedbacksPerDay />
      </div>
      <div className="MV-grid">
        <MonthlyVisitors />
      </div>
      <div className="AS-grid">
        <AdsStats allow={allow} />
      </div>
      <div className="RC-grid">
        <RevenueChart />
      </div>
    </div>
  );
};

export default home;
