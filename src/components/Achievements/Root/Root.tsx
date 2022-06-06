import React, { useState } from 'react';
import { mockdata } from './mockdata';
import './root.scss';

const LENGTH = mockdata.length;
const LIMIT = 6;

const Root = () => {
  const [showMore, setShowMore] = useState(true);
  let listed = mockdata.slice(0, LIMIT);
  const [list, setList] = useState(listed);
  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(mockdata.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setScroll(true);
  };
  return (
    <>
      <div className={scroll ? 'root-root' : 'scroll-root-root '}>
        {list.map((item, index) => {
          return (
            <div className="ach-root" key={index}>
              {/* <div> */}
              <img
                src={require('../../../assets/smartphone-addiction-line-icon-vector-37660174.png')}
                alt=""
              />
              {/* </div> */}
              <div className="ach-root2">
                <div className="titleXimage">
                  <p className="item-title">{item.title}</p>
                  <img
                    src={require('../../../assets/207-2071219_arrow-share-conversion-comments-share-icon.png')}
                    alt=""
                  />
                </div>
                <p className="item-desc">{item.description}</p>
                <div className="points-root">
                  <p className="item-points">{item.points}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showMore && (
        <button onClick={loadMore} className="achievement-button ">
          {' '}
          Load More{' '}
        </button>
      )}
    </>
  );
};

export default Root;
