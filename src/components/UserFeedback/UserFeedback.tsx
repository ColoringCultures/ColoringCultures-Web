import React, { useState, useEffect } from 'react';
import './UserFeedback.scss';
import { Mock } from './mockData';

const postsPerPage = 6;
let arrayForHoldingPosts: any = [];

const UserFeedback = () => {
  const [postsToShow, setPostsToShow] = useState<any[]>([]);
  const [next, setNext] = useState(6);

  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = Mock.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <div className="feedback-root">
      <div>
        <div>Feedbacks</div>
        <div className="card-root">
          {postsToShow.map((item, index) => (
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
        <button onClick={handleShowMorePosts}>Load more</button>
      </div>
    </div>
  );
};

export default UserFeedback;
