import React from 'react';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { Book } from '../types';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const getPriceChange = () => {
    const change = ((book.price - book.lastPrice) / book.lastPrice) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      isPositive: change > 0,
    };
  };

  const priceChange = getPriceChange();

  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="relative">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          {book.isRare && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              Rare Find
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
            <div className="flex items-center">
              {priceChange.isPositive ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm ${priceChange.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {priceChange.value}%
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{book.author}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-gray-900">₹{book.price}</span>
            {book.isUsed && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                Pre-owned
              </span>
            )}
          </div>
          {book.lastSalePrice && (
            <div className="text-sm text-gray-500 mb-2">
              Last Sale: ₹{book.lastSalePrice}
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-indigo-600 mr-1" />
              <span className="text-sm text-gray-600">{book.totalSales} sales</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(book);
              }}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;