import React from 'react';
import './UserFeedback.scss';
import { Mock } from './mockData';

const UserFeedback = () => {
  return (
    <div className="feedback-root">
      <div>Feedbacks</div>
      <div>
        {Mock.map((item, index) => {
          return (
            <div key={index} className="user-border">
              <div className="image-username">
                <img src={require('../../assets/download (1).png')} alt="" />
                <h1>{item.name}</h1>
              </div>
              <p>{item.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserFeedback;
