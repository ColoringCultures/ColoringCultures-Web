import './AdsRevenue.scss';

const AdsRevenue = () => {
  return (
    <div>
      <div className="root-ads-subrevenue">
        <div className="revenue-ads-header">
          <div className="image-ads-rev">
            <img src={require('../../../assets/Union 3.png')} alt="" />
          </div>
          <p>Ads</p>
        </div>
        <div className="revenue-ads-details">
          <p className="revenue-ads-name">Subscription</p>
          <p className="revenue-ads-number">3,254</p>
        </div>
        <div className="revenue-ads-details">
          <p className="revenue-ads-name">Average income sub</p>
          <p className="revenue-ads-number">$13</p>
        </div>
        <div className="revenue-ads-details-bottom">
          <p className="revenue-ads-name">Revenue</p>
          <p className="revenue-ads-number">31,051</p>
        </div>
      </div>
    </div>
  );
};

export default AdsRevenue;
