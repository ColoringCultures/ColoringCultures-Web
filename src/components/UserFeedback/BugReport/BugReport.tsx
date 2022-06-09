import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../UserContext';
import '../FeedbackCategories.scss';
import { Mock } from '../mockData';

const BugReport = () => {
  const [data, setData] = useState<any[]>([]);
  const { token } = useContext(UserContext);
  const LIMIT = 6;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://colorculture.herokuapp.com/feedbacks/list/',
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setData(response.data.data);
    };
    fetchData();
  }, [token]);

  const bugList = data.filter(
    (item: any) => item.category.name === 'Bug reports'
  );

  const LENGTH = Mock.length;
  const [showMore, setShowMore] = useState(true);
  let listed = Mock.slice(0, LIMIT);

  const [list, setList] = useState(listed);

  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(Mock.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setScroll(true);
  };

  return (
    <div>
      <div className={scroll ? 'card-root' : 'scroll-card-root'}>
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
