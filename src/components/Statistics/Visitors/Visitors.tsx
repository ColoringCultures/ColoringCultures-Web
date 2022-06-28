import './Visitors.scss';

const Visitors = () => {
  return (
    <div>
      <div className="root-visitors">
        <div className="visitors-header">
          <div className="image-visitors">
            <img src={require('../../../assets/Group 73.png')} alt="" />
          </div>
          <p className="visitors-head">Visitors</p>
          <div className="visitors-drop">
            <p>All</p>
            <img src={require('../../../assets/Path 729.png')} alt="" />
          </div>
        </div>
        <div className="visitors-details">
          <p className="visitors-name">Total</p>
          <p className="visitors-number">3,254</p>
        </div>
        <div className="visitors-details">
          <p className="visitors-name">Active/Returning</p>
          <p className="visitors-number">8,113</p>
        </div>
        <div className="visitors-details">
          <p className="visitors-name">Inactive</p>
          <p className="visitors-number">4,013</p>
        </div>
        <div className="visitors-details">
          <p className="visitors-name">Subscribing</p>
          <p className="visitors-number">3,018</p>
        </div>
        <div className="visitors-details-bottom">
          <p className="visitors-name">Free trial</p>
          <p className="visitors-number">9,051</p>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
