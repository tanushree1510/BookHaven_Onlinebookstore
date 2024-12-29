import React, { useState } from 'react';
import { usedBooks } from '../data/books';
import { Book } from '../types';

function AdminDashboard() {
  const [formData, setFormData] = useState<Omit<Book, 'id' | 'isUsed'>>({
    title: '',
    author: '',
    quantity: 0,
    category: '',
    price: 1,
    condition: '',
    sellerName: '',
    sellerContact: '',
    sellerEmail: '',
    imageUrl: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      ...formData,
      id: Date.now().toString(),
      isUsed: true,
    };
    usedBooks.push(newBook);
    setFormData({
      title: '',
      author: '',
      quantity: 0,
      category: '',
      price: 1,
      condition: '',
      sellerName: '',
      sellerContact: '',
      sellerEmail: '',
      imageUrl: '',
      description: '',
    });
    setImagePreview(null);
  };

  return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Admin Dashboard</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add a Used Book</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Book Title</label>
                <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter book title"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Author</label>
                <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter author name"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Price (INR)</label>
                <input
                    type="number"
                    required
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    placeholder="Enter price in INR"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Quantity</label>
                <input
                    type="number"
                    required
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value, 10) })}
                    placeholder="Enter quantity"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Condition */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Condition</label>
                <select
                    required
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="" disabled>
                    Select condition
                  </option>
                  <option value="New">New</option>
                  <option value="Good">Good</option>
                  <option value="Acceptable">Acceptable</option>
                  <option value="Old">Old</option>
                </select>
              </div>
              {/* Description */}
              <div className="col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-600">Description</label>
                <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter book description"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              {/* Image */}
              <div className="col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-600">Book Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
                />
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="mt-4 h-40 w-full object-cover rounded"
                    />
                )}
              </div>
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 shadow"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
  );
}

export default AdminDashboard;
