import AdsStats from './AdsStats/AdsStats';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import './Statistics.scss';
import SubStats from './SubStats/SubStats';
import Visitors from './Visitors/Visitors';

const Statistics = () => {
  let allow: boolean = true;
  return (
    <div className="statistics-main-root">
      <Visitors />
      <SubStats />
      <FeedbackStats />
      <AdsStats allow={allow} />
    </div>
  );
};

export default Statistics;
