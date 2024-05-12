"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/cart";
import Link from "next/link";

export default function AddToCart({ product, reviewAndCheckout = true }) {
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useCart();

  // Find the product in cartItems, if it exists
  const existingProduct = cartItems.find((item) => item?._id === product?._id);
  const initialQuantity = existingProduct ? existingProduct?.quantity : 1;

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // Update quantity state if the product's quantity changes in cartItems
    setQuantity(existingProduct ? existingProduct?.quantity : 1);
  }, [existingProduct]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product, newQuantity);
    } else {
      // If quantity becomes 0, remove the item from the cart
      removeFromCart(product?._id);
      setQuantity(1); // Reset quantity to 1 after removing from cart
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      {cartItems.some((item) => item?._id === product?._id) ? (
        <>
          <div className="input-group quantity-input">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleDecrement}
              >
                -
              </button>
            </div>
            <input
              type="number"
              className="form-control no-spin-arrows mx-5 text-center"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          {reviewAndCheckout && (
            <Link
              className="btn btn-outline-danger btn-raised btn-block mt-2"
              href="/cart"
            >
              Review & Checkout
            </Link>
          )}
        </>
      ) : (
        <button
          className="btn btn-danger btn-raised btn-block"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
