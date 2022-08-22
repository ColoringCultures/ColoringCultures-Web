import './SubStats.scss';

const SubStats = ({ stats }: any) => {
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
          <div className="S-ALL">
            <p className="sub-head">Subscription</p>
            <div className="sub-drop">
              <p>All</p>
              {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="sub-details">
          <p className="sub-name">Total Subscription</p>
          <p className="sub-number">{stats.total_subscriptions}</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Active Subscription</p>
          <p className="sub-number">{stats.active_subscription}</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Unrenewed Subscription</p>
          <p className="sub-number">nil</p>
        </div>
        <div className="sub-details">
          <p className="sub-name">Subscription Revenue</p>
          <p className="sub-number">{stats.subscription_revenue}</p>
        </div>
        <div className="sub-details-bottom">
          <p className="sub-name">Active Sub Revenue</p>
          <p className="sub-number">{stats.active_sub_revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default SubStats;
