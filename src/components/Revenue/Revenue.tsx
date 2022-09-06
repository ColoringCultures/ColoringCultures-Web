import './Revenue.scss';
import SubRevenue from './SubscriptionRevenue/SubRevenue';
import RevenueChart from './RevenueChart/RevenueChart';

const Revenue = () => {
  return (
    <div className="rev-root">
      <RevenueChart />
      <SubRevenue />
    </div>
  );
};

export default Revenue;
