import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Zara', 'Khadi', 'Alkram', 'GulAhmed'],
  datasets: [
    {
      label: '%',
      data: [19,15,28,70],
      backgroundColor: [
        'rgb(40,190,184)',
        'rgb(8,112,231)',
        'rgb(255,149,0)',
        'rgb(251,15,90)',
        
      ],
     
    },
  ],
};

export function Brands() {
  return <Doughnut data={data} />;
}
