import { Outlet } from 'react-router-dom';
import NavLink from '../../Navlink';
import './UserFeedback.scss';
import { UserContext } from '../../UserContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../api';

const UserFeedback = () => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState<any[]>([]);
  const [filterName, setFilterName] = useState('Bug reports');
  const [filteredArr, setFilteredArr] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/feedbacks/list/`, {
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

  useEffect(() => {
    const filterdData = data.filter(
      (item: any) => item.category.name === filterName
    );
    setFilteredArr(filterdData);
  }, [data, filterName]);

  return (
    <div>
      <div className="root-Feedback">
        <div className="RF-header">
          <h1>Feedbacks</h1>
        </div>
        <div className="Feedback-header">
          <NavLink
            className="Feedback-link"
            to="/Dashboard/UserFeedback"
            exact={true}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
            onClick={() => setFilterName('Bug reports')}
          >
            Bug Report
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="FeatureRequests"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
            onClick={() => setFilterName('Feature requests')}
          >
            Feature Requests
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="Praise"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
            onClick={() => setFilterName('Praise')}
          >
            Praise
          </NavLink>
          <NavLink
            className="Feedback-link"
            to="Suggestions"
            exact={false}
            activeClassName="active"
            inactiveClassName="Feedback-Link"
            onClick={() => setFilterName('Suggestions')}
          >
            Suggestions
          </NavLink>
          <p>Total Number: {filteredArr.length} </p>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
