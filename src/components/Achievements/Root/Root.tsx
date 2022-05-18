import React from 'react';
import { mockdata } from './mockdata';
import './root.scss';

const Root = () => {
  return (
    <div className="root-root">
      {mockdata.map((item, index) => {
        return (
          <div className="ach-root" key={index}>
            <div>
              <img
                src={require('../../../assets/smartphone-addiction-line-icon-vector-37660174.png')}
                alt=""
              />
            </div>
            <div className='ach-root2'>
              <div className='titleXimage'>
                <p className="item-title">{item.title}</p>
              </div>
              <p className="item-desc">{item.description}</p>
              <div className='points-root'>
                <p className="item-points">{item.points}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Root;
