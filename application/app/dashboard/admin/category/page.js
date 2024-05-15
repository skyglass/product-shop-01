"use client";
import CategoryCreate from "@/components/category/CategoryCreate";
import CategoryList from "@/components/category/CategoryList";

export default function Categories() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Create Category</p>
          <CategoryCreate />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p className="lead mb-4">List of Categories</p>
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
