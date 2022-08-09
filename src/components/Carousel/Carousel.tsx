import React, { useContext, useEffect, useState } from 'react';
import './Carousel.scss';
import { mockdata } from './mockdata';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { url } from '../../api';
import axios from 'axios';
import { UserContext } from '../../UserContext';

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>(mockdata);
  const [dataList, setDataList] = useState<any[]>([]);
  const LIMIT = 4;
  const { token } = useContext(UserContext);
  const LENGTH = dataList.length;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/carousels/`, {
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

  useEffect(() => {
    setDataList(data);
    setList(data.slice(0, LIMIT));
  }, [LENGTH, data]);

  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState<any[]>([]);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(dataList.slice(index, newIndex));
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
        <div>
          {errMessage && <p className="err-message-carousel">{errMessage}</p>}
          <div className={scroll ? 'rootcarousel-root' : 'carouselroot-root'}>
            {list.map((data, index) => {
              return (
                <div key={index} className="carousel-border">
                  <img
                    src={data.image}
                    alt=""
                    className="carousel-border__image"
                  />
                  <div className="carousel-edit-title">
                    <div>
                      <img
                        src={require('../../assets/adEdit.png')}
                        alt=""
                        onClick={() => {
                          navigate(`EditSlideShowImages/${data.id}`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showMore && (
            <div className="button-carousel-div">
              <button onClick={loadMore} className="carousel-loadmore-button">
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

export default Carousel;
