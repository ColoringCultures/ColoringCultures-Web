import './AchievementsPerDay.scss';
import GradeIcon from '@mui/icons-material/Grade';

const AchievementsPerDay = () => {
  return (
    <div>
      <div className="APD-root">
        <div className="APD-header">
          <GradeIcon />
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
