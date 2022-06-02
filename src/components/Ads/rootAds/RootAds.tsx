import { useState } from 'react';
import { Mock } from '../mockdata';
import './RootAds.scss';

const LENGTH = Mock.length;
const LIMIT = 3;

const RootAds = () => {
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
    <div className="rootads-root">
      {list.map((data, index) => {
        return (
          <div key={index} className="ads-border">
            <img src={require('../../../assets/adsss.png')} alt="" />
            <div className="ads-edit-title">
              <div>{data.title}</div>
              <div>
                <img src={require('../../../assets/adEdit.png')} alt="" />
              </div>
            </div>
          </div>
        );
      })}
      {showMore && (
        <button onClick={loadMore} className="ads-loadmore-button">
          {' '}
          Load More{' '}
        </button>
      )}
    </div>
  );
};

export default RootAds;
