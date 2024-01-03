'use client';
import { Line } from 'react-chartjs-2';

import { graphOptions } from '@/utils/constants/graph-constants';
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

function Graph({ graphData, color }) {
  const data = {
    labels: graphData.map((data) => data.month),
    datasets: [
      {
        label: 'Revenue',
        data: graphData.map((data) => data.value),
        borderColor: color,
        borderWidth: 3,
        pointBorderColor: color,
        pointBorderWidth: 3,
        pointRadius: 0,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(
            0,
            `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
              color.slice(3, 5),
              16
            )}, ${parseInt(color.slice(5, 7), 16)}, 0)`
          );
          gradient.addColorStop(1, 'white');
          return gradient;
        },
      },
    ],
  };

  const options = graphOptions;

  return (<Line data={data} options={options}></Line>);
}

export default Graph;
