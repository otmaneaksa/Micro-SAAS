import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CaloriesPerDay() {
    const data = {
        labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
        datasets: [
          {
            label: 'Calories',
            data: [400, 600, 700, 200], // Exemple de données
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <>
        <h3>Calories per Day</h3>
        <Doughnut data={data} />
    </>
  )
}
