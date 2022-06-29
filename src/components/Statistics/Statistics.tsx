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
      <div className="stats-rr">
        <MonthlyVisitors />
        <div className="stats-rr-below">
          <AdsStats allow={allow} />
          <div>
            <FeedbackStats />
          </div>
        </div>
      </div>
      <div className="stats-ww">
        <Visitors />
        <SubStats />
      </div>
    </div>
  );
};

export default Statistics;
