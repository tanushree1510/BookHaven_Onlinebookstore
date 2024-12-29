import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Trash2 } from 'lucide-react';

function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.book.id}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.book.imageUrl}
                  alt={item.book.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.book.title}</h3>
                  <p className="text-gray-600">{item.book.author}</p>
                  <p className="text-indigo-600 font-semibold">
                    ₹{item.book.price}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.book.id, parseInt(e.target.value))
                    }
                    className="w-20 rounded border-gray-300"
                  />
                  <button
                    onClick={() => removeFromCart(item.book.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <div className="text-xl font-bold mb-4">
              Total: ₹{total.toFixed(2)}
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;