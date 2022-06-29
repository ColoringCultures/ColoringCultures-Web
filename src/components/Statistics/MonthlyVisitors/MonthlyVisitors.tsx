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
import './MonthlyVisitors.scss';

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
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
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
      label: '',
      data: [900, 200, 450, 700, 500, 200, 300, 100, 200, 300, 360, 500],
      backgroundColor: '#E3844C',
      maxBarThickness: 20,
    },
  ],
};

const MonthlyVisitors = () => {
  return (
    <div className="MV-root">
      <div className="MV-below">
        <p className="MV-header">Monthly visitors statistics</p>
        <div className="MV-drop">
          <p>Months</p>
          {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default MonthlyVisitors;
