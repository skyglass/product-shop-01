import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
    },
    password: String,
    role: {
      type: String,
      default: "user",
    },
    image: String,
    address: {
      type: String,
      trim: true,
      maxlength: 320,
    },
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 minutes in milliseconds
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
