import { useState, useEffect } from 'react';
import { books } from '../services/api';
import { Book } from '../types';
import toast from 'react-hot-toast';

export const useBooks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookList, setBookList] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await books.getAll();
      setBookList(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books');
      toast.error('Error loading books');
    } finally {
      setLoading(false);
    }
  };

  const getBook = async (id: string) => {
    try {
      const data = await books.getById(id);
      return data;
    } catch (err) {
      toast.error('Error loading book details');
      throw err;
    }
  };

  const addBook = async (bookData: Partial<Book>) => {
    try {
      const data = await books.create(bookData);
      setBookList([...bookList, data]);
      toast.success('Book added successfully');
      return data;
    } catch (err) {
      toast.error('Error adding book');
      throw err;
    }
  };

  const updateBook = async (id: string, bookData: Partial<Book>) => {
    try {
      const data = await books.update(id, bookData);
      setBookList(bookList.map(book => book.id === id ? data : book));
      toast.success('Book updated successfully');
      return data;
    } catch (err) {
      toast.error('Error updating book');
      throw err;
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books: bookList,
    loading,
    error,
    fetchBooks,
    getBook,
    addBook,
    updateBook,
  };
};