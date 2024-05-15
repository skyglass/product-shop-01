import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <>
      <nav className="nav justify-content-center mb-3">
        <Link className="nav-link" href="/dashboard/user">
          Dashboard
        </Link>
        <Link className="nav-link" href="/dashboard/user/liked/blogs">
          Liked Blogs
        </Link>
        <Link className="nav-link" href="/dashboard/user/liked/products">
          Liked Products
        </Link>
        <Link className="nav-link" href="/dashboard/user/orders">
          Recent Orders
        </Link>
        <Link className="nav-link" href="/dashboard/user/product/reviews">
          Product Reviews
        </Link>
      </nav>
      {children}
    </>
  );
}
