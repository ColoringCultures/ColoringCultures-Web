import './Revenue.scss';
import AdsRevenue from './AdsRevenue/AdsRevenue';
import SubRevenue from './SubscriptionRevenue/SubRevenue';
import GeneralRevenue from './GeneralRevenue/GeneralRevenue';
import RevenueChart from './RevenueChart/RevenueChart';

const Revenue = () => {
  return (
    <div className="rev-root">
      <RevenueChart />
      <SubRevenue />
      <AdsRevenue />
      <GeneralRevenue />
    </div>
  );
};

export default Revenue;
