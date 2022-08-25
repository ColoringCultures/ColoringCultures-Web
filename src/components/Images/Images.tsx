import React, { useContext, useEffect, useRef, useState } from 'react';
import NavLink from '../../Navlink';
import { Outlet } from 'react-router-dom';
import './Images.scss';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import axios from 'axios';
import { url } from '../../api';
import { UserContext } from '../../UserContext';

const Images = () => {
  const [inputText, setInputText] = useState('');
  const [filterName, setFilterName] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [openDD, setOpenDD] = useState(false);
  const { token } = useContext(UserContext);
  const [data, setData] = useState<any[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current && !container.current.contains(e.target as Node)) {
        setOpenDD(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/colorapp/category/`, {
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
    <div>
      <div className="root-images">
        <div className="images-search">
          <input
            type="text"
            placeholder="Search Images"
            onChange={inputHandler}
          />
          <div
            className="images-search__filterIcon"
            ref={container}
            onClick={() => {
              setOpenDD(!openDD);
            }}
          >
            <FilterAltIcon />
            <p>Filter</p>
            {openDD && (
              <div className="dd-images">
                <ul>
                  <li
                    onClick={() => {
                      setFilterName('');
                    }}
                  >
                    All
                  </li>
                </ul>
                {data.map((data) => {
                  return (
                    <ul key={data.id}>
                      <li
                        onClick={() => {
                          setFilterName(data.name);
                        }}
                      >
                        {data.name}
                      </li>
                    </ul>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="images-header">
          <NavLink
            className="images-link"
            to="/Dashboard/Images"
            exact={true}
            activeClassName="active"
            inactiveClassName="images-Link"
          >
            Images
          </NavLink>
          <NavLink
            className="images-link"
            to="AddImages"
            exact={false}
            activeClassName="active"
            inactiveClassName="images-Link"
          >
            + Add Images
          </NavLink>
          <NavLink
            className="images-link"
            to="EditImages"
            exact={false}
            activeClassName="active"
            inactiveClassName="images-Link"
          >
            Edit Images
          </NavLink>
          <NavLink
            className="images-link"
            to="SlideShowImages"
            exact={false}
            activeClassName="active"
            inactiveClassName="images-Link"
          >
            SlideShow Images
          </NavLink>
          <NavLink
            className="images-link"
            to="AddSlideShowImages"
            exact={false}
            activeClassName="active"
            inactiveClassName="images-Link"
          >
            Add SlideShow Images
          </NavLink>
        </div>
        <div>
          <Outlet context={[inputText, filterName]} />
        </div>
      </div>
    </div>
  );
};

export default Images;
