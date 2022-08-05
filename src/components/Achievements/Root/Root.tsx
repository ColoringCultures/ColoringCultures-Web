import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './root.scss';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../api';

const Root = () => {
  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/achievements/`, {
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

  return (
    <>
      {errMessage && <div className="err-message-ach">{errMessage}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={'scroll-root-root '}>
          {data.map((item, index) => {
            return (
              <div
                className="ach-root"
                key={index}
                onClick={() => {
                  navigate(`Edit/${item.id}`);
                }}
              >
                {/* <div> */}
                <img src={item.icon_image} alt="" />
                {/* </div> */}
                <div className="ach-root2">
                  <div className="titleXimage">
                    <p className="item-title">{item.name}</p>
                  </div>
                  <p className="item-desc">{item.task}</p>
                  <div className="points-root">
                    <p className="item-points">{item.criteria}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Root;
