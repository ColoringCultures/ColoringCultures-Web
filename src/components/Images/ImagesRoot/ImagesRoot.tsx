import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './ImagesRoot.scss';
import { url } from '../../../api';

const ImagesRoot = () => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [inputText, filterName]: any = useOutletContext();

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (filterName === '') {
        return item;
      } else {
        return item.category.name === filterName;
      }
    });
    setFilteredData(filteredData);
  }, [filterName, data]);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (inputText === '') {
        return item;
      } else {
        return item.name.toLowerCase().includes(inputText.toLowerCase());
      }
    });
    setFilteredData(filteredData);
  }, [data, inputText]);

  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const LIMIT = 8;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/colorapp/imagevector`, {
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

  useEffect(() => {
    setList(filteredData.slice(0, LIMIT));
  }, [filteredData]);

  useEffect(() => {
    console.log(list.length);
  });

  const LENGTH = filteredData.length;
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState<any[]>([]);
  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH;
    const newList = list.concat(filteredData.slice(index, newIndex));
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
          {errMessage && <p className="err-message-images">{errMessage}</p>}
          <div className={scroll ? 'rootImages-root' : 'images-root-root'}>
            {list.map((data, index) => {
              return (
                <div key={index} className="images__border">
                  <img
                    src={data.final_image}
                    alt=""
                    className="image-border__img"
                  />
                  <div className="images-edit-title">
                    <div className="images-edit__desc">
                      <p className="images__title">{data.name}</p>
                      <p className="images__desc">{data.category?.name}</p>
                    </div>
                    <div>
                      <img
                        src={require('../../../assets/adEdit.png')}
                        alt=""
                        onClick={() => {
                          navigate(`EditImages/${data.id}`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showMore && (
            <div className="button-images-div">
              {filteredData.length > LIMIT && (
                <button onClick={loadMore} className="images-loadmore-button">
                  {' '}
                  Load More{' '}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagesRoot;
