import React from 'react';
import './Plans.scss';
import { Mock } from '../mockdata';

const Plans = () => {
  return (
    <div className="sub-root">
      {Mock.map((data, index) => {
        return (
          <div key={index} className="plan-root">
            <div className="plan-header">
              <div>
                <img
                  src={require('../../../assets/Rectangle 121.png')}
                  alt=""
                />
              </div>
              <div className="plan-header-details">
                <div className="details-name">{data.name}</div>
                <div className="details-amount">
                  ${data.amount}
                  <span>/month</span>
                </div>
              </div>
            </div>
            <div className="details-root">
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>Color up to {data.artToBeColored}</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>{data.amountOfHint} free hint</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>No ads</p>
              </div>
              <div className="flex-details">
                <img
                  src={require('../../../assets/Icon ionic-md-checkmark.png')}
                  alt=""
                />
                <p>Color pro Arts</p>
              </div>
            </div>
            <div className="button-plans">
              <button>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
