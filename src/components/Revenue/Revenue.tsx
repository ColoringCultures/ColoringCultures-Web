import './Revenue.scss';
import AdsRevenue from './AdsRevenue/AdsRevenue';
import SubRevenue from './SubscriptionRevenue/SubRevenue';
import GeneralRevenue from './GeneralRevenue/GeneralRevenue';
import RevenueChart from './RevenueChart/RevenueChart';

const Revenue = () => {
  return (
    <div className="rev-root">
      <SubRevenue />
      <AdsRevenue />
      <GeneralRevenue />
      <RevenueChart />

      <div className="sjs"></div>
    </div>
  );
};

export default Revenue;
