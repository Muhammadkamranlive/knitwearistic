import React from 'react';
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
import faker from 'faker';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Statistics of Gulahmed and Khadi',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Khadi',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor:'rgb(255,149,0) ',
    },
    {
      label: 'GulAhmed',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(251,15,90)',
    },
  ],
};

export function LineBar() {
  return <Bar options={options} data={data1} />;
}
