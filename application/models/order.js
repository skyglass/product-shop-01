import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
  },
  title: String, // Add fields you need from the product
  slug: String,
  price: Number,
  image: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    chargeId: String,
    payment_intent: String,
    receipt_url: String,
    refunded: Boolean,
    status: String,
    refundId: String,
    amount_captured: Number,
    currency: String,
    shipping: {
      address: {
        city: String,
        country: String,
        line1: String,
        line2: String,
        postal_code: String,
        state: String,
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cartItems: [cartItemSchema],
    delivery_status: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "processing",
        "Dispatched",
        "Refunded",
        "Cancelled",
        "Delivered",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
