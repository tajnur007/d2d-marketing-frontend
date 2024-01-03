'use client';
import { Line } from 'react-chartjs-2';

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

function Graph({ graphData, graphConfig, color }) {
  const data = {
    labels: graphData.map((data) => data.month),
    datasets: [
      {
        label: 'Revenue',
        data: graphData.map((data) => data.sales),
        borderColor: color,
        borderWidth: 3,
        pointBorderColor: color,
        pointBorderWidth: 3,
        pointRadius: 1,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, 'white');
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend
      },
    },
    responsive: true,
    scales: {
      y: {
        display: false, // Hide y-axis labels
      },
      x: {
        display: false, // Hide x-axis labels
      },
    },
  };

  return (
    <>
      <div
        style={{
          width: '450px',
          height: '250px',
          padding: '20px',
          cursor: 'pointer',
        }}>
        <Line data={data} options={options}></Line>     
      </div>
    </>
  );
}

export default Graph;
