import { useEffect, useState } from 'react';
// import { UserContext } from '../../../UserContext';
// import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { mockdata } from '../mockdata';
import './ImagesRoot.scss';

const ImagesRoot = () => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const inputText: string = useOutletContext();

  useEffect(() => {
    const filteredData = mockdata.filter((item) => {
      if (inputText === '') {
        return item;
      } else {
        return item.title.toLowerCase().includes(inputText.toLowerCase());
      }
    });
    setFilteredData(filteredData);
    // setList(filteredData);
  }, [inputText]);

  // const [data, setData] = useState<any[]>([]);
  // const { token } = useContext(UserContext);
  // const [filteredData, setfilteredData] = useState<any[]>(filteredData);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const LIMIT = 8;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get('https://colorculture.herokuapp.com/advertisements/', {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         setData(response.data.data);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //         setErrMessage(err.message);
  //       });
  //   };
  //   fetchData();
  // }, [token]);
  useEffect(() => {
    setList(filteredData.slice(0, LIMIT));
    setIsLoading(false);
    setErrMessage('');
  }, [filteredData]);

  const LENGTH = filteredData.length;
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState<any[]>([]);

  // useEffect(() => {
  //   setfilteredData(data);
  //   setList(data.slice(0, LIMIT));
  // }, [LENGTH, data]);

  const [index, setIndex] = useState(LIMIT);
  const [scroll, setScroll] = useState(false);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
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
                <div key={index} className="images-border">
                  <img
                    src={require('../../../assets/Image proto.png')}
                    alt=""
                  />
                  <div className="images-edit-title">
                    <div className="images-edit__desc">
                      <p className="images__title">{data.title}</p>
                      <p className="images__desc">{data.description}</p>
                    </div>
                    <div>
                      <img
                        src={require('../../../assets/adEdit.png')}
                        alt=""
                        onClick={() => {
                          navigate(`Editimages/${data.id}`);
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
              <button onClick={loadMore} className="images-loadmore-button">
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

export default ImagesRoot;
