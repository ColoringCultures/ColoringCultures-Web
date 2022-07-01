import RevenueChart from '../Revenue/RevenueChart/RevenueChart';
import AdsStats from './AdsStats/AdsStats';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import MonthlyVisitors from './MonthlyVisitors/MonthlyVisitors';
import './Statistics.scss';
import SubStats from './SubStats/SubStats';
import Visitors from './Visitors/Visitors';

const Statistics = () => {
  let allow: boolean = true;
  return (
    <div className="statistics-main-root">
      <div className="MV1-stats">
        <MonthlyVisitors />
      </div>
      <div className="ADS1">
        <AdsStats allow={allow} />
      </div>
      <div className="RevFed">
        <RevenueChart />
        <FeedbackStats />
      </div>
      <div className="VISSUB">
        <Visitors />
        <SubStats />
      </div>
    </div>
  );
};

export default Statistics;
