import React from 'react';
import { useParams } from 'react-router-dom';
import { Book, SaleHistory } from '../types';
import PriceHistory from '../components/PriceHistory';
import MarketStats from '../components/MarketStats';
import RecentSales from '../components/RecentSales';
import BidAskSpread from '../components/BidAskSpread';
import { Shield, Award, TrendingUp, BookOpen } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

const BookDetail = () => {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // Mock data - In real app, fetch from API
  const book: Book = {
    id: '1',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 1499,
    lastPrice: 1399,
    category: 'Finance',
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=300',
    isUsed: false,
    totalSales: 156,
    lastSalePrice: 1450,
    isRare: true,
    edition: 'First Edition',
    publishYear: 2020,
    description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
    marketValue: 1600,
  };

  const recentSales: SaleHistory[] = [
    { id: '1', bookId: '1', price: 1450, date: '2024-03-10', buyerId: '1', sellerId: '2' },
    { id: '2', bookId: '1', price: 1400, date: '2024-03-09', buyerId: '3', sellerId: '4' },
    { id: '3', bookId: '1', price: 1380, date: '2024-03-08', buyerId: '5', sellerId: '6' },
  ];

  const handleAddToCart = () => {
    addToCart(book);
    toast.success('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full rounded-lg shadow-lg mb-8"
          />
          <MarketStats
            lastSale={book.lastSalePrice || 0}
            averagePrice={1425}
            totalSales={book.totalSales}
            priceRange={{ low: 1300, high: 1600 }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600">{book.author}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-bold">₹{book.price}</span>
              <span className="text-green-600 font-semibold">
                +{((book.price - book.lastPrice) / book.lastPrice * 100).toFixed(1)}% last 24h
              </span>
            </div>

            <BidAskSpread
              highestBid={1400}
              lowestAsk={book.price}
              spread={book.price - 1400}
            />

            <button
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors mt-4"
            >
              Buy Now at ₹{book.price}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 mr-2" />
              <span>Authenticity Verified</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Award className="w-5 h-5 mr-2" />
              <span>Condition Guaranteed</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">About this book</h2>
            <p className="text-gray-600">{book.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Price History</h2>
          <PriceHistory bookId={book.id} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Sales</h2>
          <RecentSales sales={recentSales} />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;