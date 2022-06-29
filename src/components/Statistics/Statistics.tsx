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
      <div className="stats-r1">
        <div className="MV-stats">
          <MonthlyVisitors />
        </div>
        <div className="stats-rr">
          <div className="stats-ads">
            <AdsStats allow={allow} />
          </div>
          <div className="stats-ads-flex">
            <div className="stats-rc">
              <RevenueChart />
            </div>
            <div>
              <FeedbackStats />
            </div>
          </div>
        </div>
      </div>
      <div className="stats-r2">
        <div className="r2-VV">
          <Visitors />
        </div>
        <div className="r2-VV">
          <SubStats />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
