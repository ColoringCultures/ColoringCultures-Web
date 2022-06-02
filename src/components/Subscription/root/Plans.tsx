import React, { useState } from 'react';
import './Plans.scss';
import { Mock } from '../mockdata';

const LENGTH = Mock.length;
const LIMIT = 3;

const Plans = () => {
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
    <div className="sub-root">
      {list.map((data, index) => {
        return (
          <div key={index} className="plan-root">
            <div className="plan-header">
              <div>
                <img
                  src={require('../../../assets/Rectangle 121.png')}
                  alt=""
                />
              </div>
              <div className="plan-header-details">
                <div className="details-name">{data.name}</div>
                <div className="details-amount">
                  ${data.amount}
                  <span>/month</span>
                </div>
              </div>
            </div>
            <div className="details-root">
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>Color up to {data.artToBeColored}</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>{data.amountOfHint} free hint</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>No ads</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>Color pro Arts</p>
              </div>
            </div>
            <div className="button-plans">
              <button>Edit</button>
            </div>
          </div>
        );
      })}
      {showMore && (
        <button onClick={loadMore} className="sub-loadmore-button">
          {' '}
          Load More{' '}
        </button>
      )}
    </div>
  );
};

export default Plans;
