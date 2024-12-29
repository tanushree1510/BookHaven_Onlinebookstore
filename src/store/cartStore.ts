import { create } from 'zustand';
import { Book, CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (book) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.book.id === book.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { book, quantity: 1 }] };
    }),
  removeFromCart: (bookId) =>
    set((state) => ({
      items: state.items.filter((item) => item.book.id !== bookId),
    })),
  updateQuantity: (bookId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));