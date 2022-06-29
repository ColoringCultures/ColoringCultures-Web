import React from 'react';
import './home.scss';
import AdsStats from '../Statistics/AdsStats/AdsStats';
import VisitorsPerDay from './VisitorsPerDay/VisitorsPerDay';
import AchievementsPerDay from './AchievementsPerDay/AchievementsPerDay';
import FeedbacksPerDay from './FeedbacksPerDay/FeedbacksPerDay';
// import MonthlyVisitors from '../Statistics/MonthlyVisitors/MonthlyVisitors';



const home = () => {
  let allow: boolean = false;
  return (
    <div className="dash-home">
      <div className="dash-home-1">
        <div className="dash-analitics">
          <VisitorsPerDay />
          <AchievementsPerDay />
          <FeedbacksPerDay />
        </div>
        {/* <div className="dash-MV">
          <MonthlyVisitors />
        </div> */}
        <div>
          <AdsStats allow={allow} />
        </div>
      </div>
      <div>Images</div>
    </div>
  );
};

export default home;
