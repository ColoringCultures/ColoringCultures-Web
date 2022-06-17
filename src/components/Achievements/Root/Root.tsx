import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './root.scss';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';

const Root = () => {
  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://colorculture.herokuapp.com/achievements/',
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setData(response.data.data);
      setIsLoading(false);
      console.log(response);
    };
    fetchData();
  }, [token]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={'scroll-root-root '}>
          {data.map((item, index) => {
            return (
              <div className="ach-root" key={index}>
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
