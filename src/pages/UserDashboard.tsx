import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { newBooks, usedBooks } from '../data/books';

function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on search query
  const filteredNewBooks = newBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredUsedBooks = usedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Available Books</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books..."
          className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* New Books Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">New Books</h2>
        {filteredNewBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredNewBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No new books found for "{searchQuery}".</p>
        )}
      </section>

      {/* Used Books Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Used Books</h2>
        {filteredUsedBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUsedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No used books found for "{searchQuery}".</p>
        )}
      </section>
    </div>
  );
}

export default UserDashboard;
