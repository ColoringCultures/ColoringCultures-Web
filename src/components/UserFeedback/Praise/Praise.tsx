import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../UserContext';
import '../FeedbackCategories.scss';
import Loader from '../../../Loader/Loader';

const Praise = () => {
  const [data, setData] = useState<any[]>([]);
  const { token } = useContext(UserContext);
  const [bugList, setBugList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    };
    fetchData();
  }, [token]);

  const LENGTH = bugList.length;
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const datum = data.filter((item: any) => item.category.name === 'Praise');
    setBugList(datum);
    setList(datum.slice(0, LIMIT));
  }, [data]);

  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(bugList.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setScroll(true);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={scroll ? 'card-root' : 'scroll-card-root'}>
          {list.map((item, index) => (
            <div key={index} className="user-border">
              <div className="image-username">
                <img src={require('../../../assets/download (1).png')} alt="" />
                <h1>User #{item.id}</h1>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
      {showMore && (
        <div>
          <button onClick={loadMore} className="submit-button">
            {' '}
            Load More{' '}
          </button>
          <p style={{ marginLeft: '50px' }}>Total number is {LENGTH} </p>
        </div>
      )}
    </div>
  );
};

export default Praise;
