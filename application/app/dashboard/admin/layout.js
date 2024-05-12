"use client";
import Link from "next/link";
export default function AdminLayout({ children }) {
  return (
    <>
      <nav className="nav justify-content-center mb-3">
        <Link className="nav-link" href="/dashboard/admin">
          Admin
        </Link>
        <Link className="nav-link" href="/dashboard/admin/blog/create">
          Create Blog
        </Link>
        <Link className="nav-link" href="/dashboard/admin/blog/list">
          Blogs List
        </Link>
        <Link className="nav-link" href="/dashboard/admin/category">
          Categories
        </Link>
        <Link className="nav-link" href="/dashboard/admin/tag">
          Tags
        </Link>
        <Link className="nav-link" href="/dashboard/admin/product">
          Add Product
        </Link>
        <Link className="nav-link" href="/dashboard/admin/products">
          Products List
        </Link>
        <Link className="nav-link" href="/dashboard/admin/orders">
          Orders List
        </Link>
        <Link className="nav-link" href="/dashboard/admin/product/reviews">
          Product Reviews
        </Link>
      </nav>
      {children}
    </>
  );
}
