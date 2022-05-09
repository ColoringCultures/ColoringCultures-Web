import React from 'react';
import { Mock } from './mockData';

const UserFeedback = () => {
  return (
    <div>
      <div>UserFeedback</div>
      <div>
        {Mock.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <img src={require('../../assets/images/user.png')} alt="user" />
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
