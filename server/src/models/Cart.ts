import mongoose from 'mongoose';
import { Document } from 'mongoose';

interface DocumentResult<T> extends Document {
  _doc: T;
}

interface CartImpl extends DocumentResult<CartImpl> {
  title?: string;
  quantity?: number;
  price?: number;
  productId?: string;
}

const CartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<CartImpl>('cart', CartSchema);
