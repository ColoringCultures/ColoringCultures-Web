import React, { useState } from 'react';
import NavLink from '../../Navlink';
import { Outlet } from 'react-router-dom';
import './Images.scss';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Images = () => {
  const [inputText, setInputText] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <div className="root-images">
        <div className="images-search">
          <input
            type="text"
            placeholder="Search Images"
            onChange={inputHandler}
          />
          <div className="images-search__filterIcon">
            <FilterAltIcon />
            <p>Filter</p>
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
          <Outlet context={inputText} />
        </div>
      </div>
    </div>
  );
};

export default Images;
