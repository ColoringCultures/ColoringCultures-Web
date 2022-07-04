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
      <div className="root-h1">
        <div className="VAF">
          <VisitorsPerDay />
          <AchievementsPerDay />
          <FeedbacksPerDay />
        </div>
        <div className="MV-home">
          <MonthlyVisitors />
        </div>
        <div className="AR-home">
          <AdsStats allow={allow} />
          <RevenueChart />
        </div>
      </div>
      <div className="root-h2">
        <p>images info</p>
      </div>
    </div>
  );
};

export default home;
