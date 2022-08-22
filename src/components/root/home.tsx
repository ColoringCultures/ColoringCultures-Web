import './home.scss';
import VisitorsPerDay from './VisitorsPerDay/VisitorsPerDay';
import AchievementsPerDay from './AchievementsPerDay/AchievementsPerDay';
import FeedbacksPerDay from './FeedbacksPerDay/FeedbacksPerDay';
import MonthlyVisitors from '../Statistics/MonthlyVisitors/MonthlyVisitors';
import RevenueChart from '../Revenue/RevenueChart/RevenueChart';
import ImagesInfo from './ImagesInfo/ImagesInfo';

const home = () => {
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
          <RevenueChart />
        </div>
      </div>
      <div className="root-h2">
        <ImagesInfo />
      </div>
    </div>
  );
};

export default home;
