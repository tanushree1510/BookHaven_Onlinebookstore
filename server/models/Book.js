import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  lastPrice: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  condition: String,
  sellerName: String,
  sellerContact: String,
  sellerEmail: String,
  imageUrl: { type: String, required: true },
  isUsed: { type: Boolean, default: false },
  isRare: { type: Boolean, default: false },
  edition: String,
  publishYear: Number,
  description: String,
  totalSales: { type: Number, default: 0 },
  lastSalePrice: Number,
  priceHistory: [{
    date: Date,
    price: Number
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Book', bookSchema);