import './Revenue.scss';
import AdsRevenue from './AdsRevenue/AdsRevenue';
import SubRevenue from './SubscriptionRevenue/SubRevenue';
import GeneralRevenue from './GeneralRevenue/GeneralRevenue';

const Revenue = () => {
  return (
    <div className="rev-root">
      <SubRevenue />
      <AdsRevenue />
      <GeneralRevenue />
    </div>
  );
};

export default Revenue;
