import React, { useState } from 'react';
import './BugReport.scss';
import { Mock } from '../mockData';

const LENGTH = Mock.length;
const LIMIT = 6;

const BugReport = () => {
  const [showMore, setShowMore] = useState(true);
  let listed = Mock.slice(0, LIMIT);
  const [list, setList] = useState(listed);
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(Mock.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <div className="feed-root">
      <div className="card-root">
        {list.map((item, index) => (
          <div key={index} className="user-border">
            <div className="image-username">
              <img src={require('../../../assets/download (1).png')} alt="" />
              <h1>{item.name}</h1>
            </div>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
      {showMore && (
        <button onClick={loadMore} className="submit-button">
          {' '}
          Load More{' '}
        </button>
      )}
    </div>
  );
};

export default BugReport;
