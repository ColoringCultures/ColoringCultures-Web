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
import { url } from '../../../api';
import { UserContext } from '../../../UserContext';
import './RevenueChart.scss';

const RevenueChart = () => {
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
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 30,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 90,
          minRotation: 90,
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
        label: 'Subscription',
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
        backgroundColor: '#E20097',
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
            january: response.data.data.subscription.subscription_january,
            february: response.data.data.subscription.subscription_february,
            march: response.data.data.subscription.subscription_march,
            april: response.data.data.subscription.subscription_april,
            may: response.data.data.subscription.subscription_may,
            june: response.data.data.subscription.subscription_june,
            july: response.data.data.subscription.subscription_july,
            august: response.data.data.subscription.subscription_august,
            september: response.data.data.subscription.subscription_september,
            october: response.data.data.subscription.subscription_october,
            november: response.data.data.subscription.subscription_november,
            december: response.data.data.subscription.subscription_december,
          }));
        });
    };
    fetchData();
  }, [token]);

  return (
    <div className="RC-root">
      <div className="RC-below">
        <p className="RC-header">Revenue</p>
        <div className="RC-drop">
          <p>Last year</p>
          {/* <img src={require('../../../assets/Path 729.png')} alt="" /> */}
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default RevenueChart;
