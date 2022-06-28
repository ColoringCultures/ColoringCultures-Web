import React from 'react';
import './home.scss';
import AdsStats from '../Statistics/AdsStats/AdsStats';
import VisitorsPerDay from './VisitorsPerDay/VisitorsPerDay';
import AchievementsPerDay from './AchievementsPerDay/AchievementsPerDay';
import FeedbacksPerDay from './FeedbacksPerDay/FeedbacksPerDay';

const home = () => {
  let allow: boolean = false;
  return (
    <div className="dash-home">
      <AdsStats allow={allow} />
      <VisitorsPerDay />
      <AchievementsPerDay />
      <FeedbacksPerDay />
    </div>
  );
};

export default home;
