import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../api';
import { UserContext } from '../../../UserContext';
import './ImagesInfo.scss';

const ImagesInfo = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [data, setData] = useState([]);

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
        });
    };
    fetchData();
  }, [token]);

  return (
    <div className="images-info-root">
      <div className="images-info-root__content">
        <h1>Images Info</h1>
        <div className="images-content__number">
          <p className="content-number__1">Images</p>
          <p className="content-number__2">{data.length}</p>
        </div>
        <div
          className="images-info-AI"
          onClick={() => {
            navigate('/Dashboard/Images/AddImages');
          }}
        >
          Add Images
        </div>
        <div
          className="images-info-UI"
          onClick={() => {
            navigate('/Dashboard/Images/EditImages');
          }}
        >
          Update Images
        </div>
        <div
          className="images-info-DI"
          onClick={() => {
            navigate('/Dashboard/Images/EditImages');
          }}
        >
          Delete Images
        </div>
        <div className="Images_view">
          <p
            onClick={() => {
              navigate('/Dashboard/Images');
            }}
          >
            Images
          </p>
          <img src={require('../../../assets/Rectangle 38.png')} alt="Images" />
        </div>
        <div className="Images_view">
          <p
            onClick={() => {
              navigate('/Dashboard/Images');
            }}
          >
            View all
          </p>
          <img
            src={require('../../../assets/Rectangle 39.png')}
            alt="View All"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesInfo;
