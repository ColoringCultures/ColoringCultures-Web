import './FeedbacksPerDay.scss';

const FeedbacksPerDay = () => {
  return (
    <div>
      <div className="FPD-root">
        <div className="FPD-header">
          <img src={require('../../../assets/Path 63.png')} alt="dashboard" />
          <p>Feedbacks/day</p>
        </div>
        <div className="FPD-details">
          <p className="FPD-amount">281</p>
          <div className="FPD-perc">
            <img src={require('../../../assets/Path 61.png')} alt="" />
            <p className="FPD-perc-amount">22.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbacksPerDay;
