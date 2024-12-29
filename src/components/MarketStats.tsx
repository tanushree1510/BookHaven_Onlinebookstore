import React from 'react';
import { TrendingUp, DollarSign, BarChart2, Clock } from 'lucide-react';

interface MarketStatsProps {
  lastSale: number;
  averagePrice: number;
  totalSales: number;
  priceRange: { low: number; high: number };
}

const MarketStats: React.FC<MarketStatsProps> = ({
  lastSale,
  averagePrice,
  totalSales,
  priceRange,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="w-5 h-5 mr-2" />
          <span>Last Sale</span>
        </div>
        <span className="text-lg font-bold">₹{lastSale}</span>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center text-gray-600 mb-2">
          <DollarSign className="w-5 h-5 mr-2" />
          <span>Average Price</span>
        </div>
        <span className="text-lg font-bold">₹{averagePrice}</span>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center text-gray-600 mb-2">
          <TrendingUp className="w-5 h-5 mr-2" />
          <span>Total Sales</span>
        </div>
        <span className="text-lg font-bold">{totalSales}</span>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center text-gray-600 mb-2">
          <BarChart2 className="w-5 h-5 mr-2" />
          <span>Price Range</span>
        </div>
        <span className="text-lg font-bold">
          ₹{priceRange.low} - ₹{priceRange.high}
        </span>
      </div>
    </div>
  );
};

export default MarketStats;