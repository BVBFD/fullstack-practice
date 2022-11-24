import mongoose from "mongoose";

interface DocumentResult<T> extends Document {
  _doc: T;
}

interface UserImpl extends DocumentResult<UserImpl> {
  username: string;
  email: string;
  password: string;
  isAdmin: Boolean;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserImpl>("User", UserSchema);
