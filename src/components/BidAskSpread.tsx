import React from 'react';

interface BidAskSpreadProps {
  highestBid: number;
  lowestAsk: number;
  spread: number;
}

const BidAskSpread: React.FC<BidAskSpreadProps> = ({
  highestBid,
  lowestAsk,
  spread,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Market Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-sm text-gray-600 mb-1">Highest Bid</div>
          <div className="text-lg font-bold text-green-600">₹{highestBid}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">Lowest Ask</div>
          <div className="text-lg font-bold text-red-600">₹{lowestAsk}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">Spread</div>
          <div className="text-lg font-bold">₹{spread}</div>
        </div>
      </div>
    </div>
  );
};

export default BidAskSpread;