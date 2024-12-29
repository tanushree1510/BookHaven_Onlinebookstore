export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  lastPrice: number;
  lastSalePrice?: number;
  totalSales: number;
  category: string;
  quantity: number;
  condition?: string;
  sellerName?: string;
  sellerContact?: string;
  sellerEmail?: string;
  imageUrl: string;
  isUsed: boolean;
  isRare?: boolean;
  edition?: string;
  publishYear?: number;
  description?: string;
  marketValue?: number;
  priceHistory?: PriceHistoryPoint[];
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  reputation?: number;
  totalSales?: number;
  joinedDate?: string;
  verifiedSeller?: boolean;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface SaleHistory {
  id: string;
  bookId: string;
  price: number;
  date: string;
  buyerId: string;
  sellerId: string;
}