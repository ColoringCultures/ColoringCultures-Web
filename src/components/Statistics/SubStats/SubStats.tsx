import './SubStats.scss';

const SubStats = () => {
  return (
    <div>
      <div className="root-sub">
        <div className="sub-header">
          <div className="image-sub">
            <img
              src={require('../../../assets/43-432060_subscribe-icon-png-subscription-white-icon-png-transparent.png')}
              alt=""
            />
          </div>
          <p className="sub-head">Subscription</p>
          <div className="sub-drop">
            <p>All</p>
            <img src={require('../../../assets/Path 729.png')} alt="" />
          </div>
        </div>
        <div className="sub-details">
          <p className="sub-name">Total</p>
          <p className="sub-number">3,254</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Active/Returning</p>
          <p className="sub-number">8,113</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Inactive</p>
          <p className="sub-number">4,013</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Subscribing</p>
          <p className="sub-number">3,018</p>
        </div>
        <div className="sub-details-bottom">
          <p className="sub-name">Free trial</p>
          <p className="sub-number">9,051</p>
        </div>
      </div>
    </div>
  );
};

export default SubStats;