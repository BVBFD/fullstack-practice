import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('menu', MenuSchema);
