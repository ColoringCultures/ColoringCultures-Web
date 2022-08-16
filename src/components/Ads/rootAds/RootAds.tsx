import { useContext, useEffect, useState } from 'react';
import './RootAds.scss';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../api';

const RootAds = () => {
  const [data, setData] = useState<any[]>([]);
  const { token } = useContext(UserContext);
  const [bugList, setBugList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const LIMIT = 4;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/advertisements/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrMessage(err.message);
        });
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
          {errMessage && <p className="err-message-ads">{errMessage}</p>}
          <div className={scroll ? 'rootads-root' : 'adsroot-root'}>
            {list.map((data, index) => {
              return (
                <div key={index} className="ads__border">
                  {data.file.includes('.mp4') ? (
                    <video width={240} height={250} controls>
                      <source src={data.file} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={data.file} alt="" className="ads-border__image" />
                  )}
                  <div className="ads-edit-title">
                    <div>{data.title}</div>
                    <div>
                      <img
                        src={require('../../../assets/adEdit.png')}
                        alt=""
                        onClick={() => {
                          navigate(`EditAds/${data.id}`);
                        }}
                      />
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
