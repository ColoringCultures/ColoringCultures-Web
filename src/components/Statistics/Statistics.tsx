import FeedbackStats from './FeedbackStats/FeedbackStats';
import './Statistics.scss';
import SubStats from './SubStats/SubStats';
import Visitors from './Visitors/Visitors';

const Statistics = () => {
  return (
    <div className="statistics-main-root">
      <Visitors />
      <SubStats />
      <FeedbackStats />
    </div>
  );
};

export default Statistics;
