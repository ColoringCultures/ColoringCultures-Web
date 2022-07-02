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
        <div className="ARF">
          <AdsStats allow={allow} />
          <div className="ARF-ss">
            <RevenueChart />
            <FeedbackStats />
          </div>
        </div>
      </div>
      <div className="VISSUB">
        <Visitors />
        <SubStats />
      </div>
    </div>
  );
};

export default Statistics;
