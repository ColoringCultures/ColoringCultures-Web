import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './RevenueChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December ',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Subscription',
      data: [90, 20, 45, 70, 50, 20, 30, 10, 20, 30, 30, 50],
      backgroundColor: '#E20097',
      maxBarThickness: 20,
    },
    {
      label: 'Ads',
      data: [40, 50, 20, 50, 20, 40, 10, 50, 50, 10, 30, 20],
      backgroundColor: '#FF9584',
      maxBarThickness: 20,
    },
  ],
};

const RevenueChart = () => {
  return (
    <div className="RC-root">
      <div className="RC-below">
        <p className="RC-header">Revenue</p>
        <div className="RC-drop">
          <p>Months</p>
          {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default RevenueChart;
