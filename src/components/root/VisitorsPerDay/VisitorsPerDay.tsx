import React from 'react';
import './VisitorsPerDay.scss';
import PersonIcon from '@mui/icons-material/Person';

const VisitorsPerDay = () => {
  return (
    <div>
      <div className="VPD-root">
        <div className="VPD-header">
          <PersonIcon />
          <p>Visitors/day</p>
        </div>
        <div className="VPD-details">
          <p className="VPD-amount">12,254</p>
          <div className="VPD-perc">
            <img src={require('../../../assets/Path 61.png')} alt="" />
            <p className="VPD-perc-amount">12.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorsPerDay;
