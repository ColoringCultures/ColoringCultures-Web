import './AchievementsPerDay.scss';

const AchievementsPerDay = () => {
  return (
    <div>
      <div className="APD-root">
        <div className="APD-header">
          <img src={require('../../../assets/Path 63.png')} alt="dashboard" />
          <p>Achievements/day</p>
        </div>
        <div className="APD-details">
          <p className="APD-amount">940</p>
          <div className="APD-perc">
            <img src={require('../../../assets/Path 67.png')} alt="" />
            <p className="APD-perc-amount">+0.14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPerDay;
