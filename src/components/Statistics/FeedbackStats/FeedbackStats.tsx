import React from 'react';
import './FeedbackStats.scss';

const FeedbackStats = ({ stats }: any) => {
  return (
    <div className="fd-root">
      <div className="feedback-root">
        <div className="feedback-header">
          <p className="feedback-p1">Feedbacks</p>
          <div className="feedback-header-details">
            <p className="feedback-p2">7 days</p>
            {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
          </div>
        </div>
        <div className="feedback-total">
          <p className="feedback-total-p">Total</p>
          <p className="feedback-total-p2">{stats.feedbacks_past_seven_days}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStats;
