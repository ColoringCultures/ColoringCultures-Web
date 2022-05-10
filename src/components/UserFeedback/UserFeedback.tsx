import React from 'react';
import './UserFeedback.scss';
import { Mock } from './mockData';

const UserFeedback = () => {
  return (
    <div className="feedback-root">
      <div>
        <div>Feedbacks</div>
        <div className="card-root">
          {Mock.map((item, index) => (
            <div key={index} className="user-border">
              <div className="image-username">
                <img src={require('../../assets/download (1).png')} alt="" />
                <h1>{item.name}</h1>
              </div>
              <hr />
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
