import React from 'react';
import { Line } from 'react-chartjs-2';

interface PriceHistoryProps {
  bookId: string;
}

const PriceHistory: React.FC<PriceHistoryProps> = ({ bookId }) => {
  const data = {
    labels: ['6 months ago', '5 months ago', '4 months ago', '3 months ago', '2 months ago', 'Last month', 'Current'],
    datasets: [
      {
        label: 'Sale Price',
        data: [1200, 1300, 1250, 1400, 1350, 1500, 1450],
        borderColor: 'rgb(79, 70, 229)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price History',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceHistory;