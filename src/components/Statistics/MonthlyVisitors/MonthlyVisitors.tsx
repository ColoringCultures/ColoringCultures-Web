import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './MonthlyVisitors.scss';
import { UserContext } from '../../../UserContext';
import { url } from '../../../api';

const MonthlyVisitors = () => {
  const { token } = useContext(UserContext);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC ',
  ];
  const [analytics, setAnalytics] = useState({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  });

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          analytics.january,
          analytics.february,
          analytics.march,
          analytics.april,
          analytics.may,
          analytics.june,
          analytics.july,
          analytics.august,
          analytics.september,
          analytics.october,
          analytics.november,
          analytics.december,
        ],
        backgroundColor: '#E3844C',
        maxBarThickness: 20,
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/analytics/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setAnalytics((analytics) => ({
            ...analytics,
            january: response.data.data.visitors.visitors_january,
            february: response.data.data.visitors.visitors_february,
            march: response.data.data.visitors.visitors_march,
            april: response.data.data.visitors.visitors_april,
            may: response.data.data.visitors.visitors_may,
            june: response.data.data.visitors.visitors_june,
            july: response.data.data.visitors.visitors_july,
            august: response.data.data.visitors.visitors_august,
            september: response.data.data.visitors.visitors_september,
            october: response.data.data.visitors.visitors_october,
            november: response.data.data.visitors.visitors_november,
            december: response.data.data.visitors.visitors_december,
          }));
        });
    };
    fetchData();
  }, [token]);
  return (
    <div className="MV-root">
      <div className="MV-below">
        <p className="MV-header">Monthly visitors statistics</p>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default MonthlyVisitors;
