import { useContext, useEffect, useState } from 'react';
import './RootAds.scss';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import Loader from '../../../Loader/Loader';

const RootAds = () => {
  const [data, setData] = useState<any[]>([]);
  const { token } = useContext(UserContext);
  const [bugList, setBugList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const LIMIT = 6;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://colorculture.herokuapp.com/advertisements/',
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
    setBugList(data);
    setList(data.slice(0, LIMIT));
  }, [LENGTH, data]);

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
    if (LENGTH <= 6) {
      setIsDisabled(true);
    }
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className={scroll ? 'rootads-root' : 'adsroot-root'}>
            {list.map((data, index) => {
              return (
                <div key={index} className="ads-border">
                  <img className="ads-image" src={data.file} alt="" />
                  <div className="ads-edit-title">
                    <div>{data.title}</div>
                    <div>
                      <img src={require('../../../assets/adEdit.png')} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showMore && (
            <div className="button-ad-div">
              <button
                onClick={loadMore}
                className="ads-loadmore-button"
                disabled={isDisabled}
              >
                {' '}
                Load More{' '}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RootAds;
