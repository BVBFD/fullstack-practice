import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    flavor: {
      type: Number,
      required: true,
    },
    acidity: {
      type: Number,
      required: true,
    },
    body: {
      type: Number,
      required: true,
    },
    sweetness: {
      type: Number,
      required: true,
    },
    aftertaste: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('product', ProductSchema);
