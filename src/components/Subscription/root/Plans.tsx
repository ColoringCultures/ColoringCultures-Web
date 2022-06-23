import { useContext, useEffect, useState } from 'react';
import './Plans.scss';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const { token } = useContext(UserContext);
  const [bugList, setBugList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const LIMIT = 2;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://colorculture.herokuapp.com/subscriptions/fetch/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrMessage(err.message);
          setIsLoading(false);
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
          {errMessage && <p className="err-message-plan">{errMessage}</p>}
          <div className={scroll ? 'sub-root' : 'scroll-sub-root'}>
            {list.map((data, index) => {
              return (
                <div key={index} id={data.id} className="plan-root">
                  <div className="plan-header">
                    <div>
                      <img
                        src={require('../../../assets/Rectangle 121.png')}
                        alt=""
                      />
                    </div>
                    <div className="plan-header-details">
                      <div className="details-name">{data.plan_name}</div>
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
                      <p>{data.art_to_be_colored} arts to be Colored</p>
                    </div>
                    <div className="flex-details">
                      <img
                        src={require('../../../assets/Icon ionic-md-checkmark.png')}
                        alt=""
                      />
                      <p>{data.amount_of_hint} free hints</p>
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
                    <button
                      onClick={() => {
                        navigate(`EditPlans/${data.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {showMore && (
            <button
              onClick={loadMore}
              className="sub-loadmore-button"
              disabled={isDisabled}
            >
              {' '}
              Load More{' '}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Plans;
