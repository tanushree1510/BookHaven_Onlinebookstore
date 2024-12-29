import React from 'react';
import { SaleHistory } from '../types';

interface RecentSalesProps {
  sales: SaleHistory[];
}

const RecentSales: React.FC<RecentSalesProps> = ({ sales }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Recent Sales</h2>
      </div>
      <div className="divide-y">
        {sales.map((sale) => (
          <div key={sale.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-medium">₹{sale.price}</span>
              <span className="text-sm text-gray-500">
                {new Date(sale.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;