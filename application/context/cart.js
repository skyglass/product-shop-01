import { set } from "mongoose";
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [percentOff, setPercentOff] = useState(0);
  const [validCoupon, setValidCoupon] = useState(false);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to local storage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const updateQuantity = (product, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item._id === product._id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);

    // Update local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }
  };

  const handleCoupon = async (coupon) => {
    // apply coupon
    try {
      const response = await fetch(`${process.env.API}/stripe/coupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ couponCode: coupon }),
      });

      if (!response.ok) {
        // const data = await response.json();
        // toast.error("Invalid coupon code");
        setPercentOff(0);
        setValidCoupon(false);
        return;
      } else {
        const data = await response.json();
        setPercentOff(data.percent_off);
        setValidCoupon(true);
        console.log("coupon code applied => ", data);
        toast.success(`${data?.name} applied successfully`); // data.percent_off
        // if (cartItems?.length > 0) {
        //   toast.success(`${data?.name} applied successfully`); // data.percent_off
        // }
      }
    } catch (err) {
      console.log(err);
      setPercentOff(0);
      setValidCoupon(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  // Provide cart items and functions to the rest of the app
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        couponCode,
        setCouponCode,
        handleCoupon,
        percentOff,
        validCoupon,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
