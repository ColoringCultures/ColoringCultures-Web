import React from 'react';
import './GeneralRevenue.scss';

const GeneralRevenue = () => {
  return (
    <div>
      <div className="gen-root">
        <div className="gen-header">
          <p className="gen-p1">Revenue</p>
          <div className="gen-header-details">
            <p className="gen-p2">7 days</p>
            {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
          </div>
        </div>
        <div className="gen-total">
          <p className="gen-total-p">Total</p>
          <p className="gen-total-p2">$3,254</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralRevenue;
