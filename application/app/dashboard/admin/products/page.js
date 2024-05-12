"use client";
import ProductList from "@/components/product/admin/ProductList";

export default function AddProduct() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead mb-4 text-center">List of Products</p>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
