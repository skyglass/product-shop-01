"use client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product/ProductList";

export default function UserDashboard() {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.API}/user/product/liked`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLikedProducts(data);
      } catch (error) {
        console.error("Error fetching liked products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">Liked Products</p>
          <br />
          <ProductList products={likedProducts} />
        </div>
      </div>
    </div>
  );
}
