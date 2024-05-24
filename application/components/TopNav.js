import { useSession, signOut } from "next-auth/react";
import { useSearch } from "@/context/search";
import Link from "next/link";
import { useProduct } from "@/context/product";
import { useCart } from "@/context/cart";
import { BsFillCartCheckFill } from "react-icons/bs";

export default function TopNav() {
  const { data, status } = useSession();
  const { cartItems } = useCart();
  // products
  const {
    productSearchQuery,
    setProductSearchQuery,
    fetchProductSearchResults,
  } = useProduct();

  const { searchQuery, setSearchQuery, fetchSearchResults } = useSearch();

  // console.log(data, status);

  return (
    <nav className="nav shadow justify-content-between mb-3 pt-3">
      <Link className="nav-link" href="/">
        🛒 NextEcom Test 2
      </Link>

      <Link className="nav-link" href="/products">
        Products
      </Link>

      <Link className="nav-link" href="/categories">
        Categories
      </Link>

      <Link className="nav-link" href="/blogs">
        BLOGS
      </Link>

      <form
        className="d-flex mx-2"
        role="search"
        onSubmit={fetchProductSearchResults}
      >
        <input
          className="form-control"
          type="search"
          placeholder="Search products"
          aria-label="Search"
          onChange={(e) => setProductSearchQuery(e.target.value)}
          value={productSearchQuery}
        />
        <button className="btn" type="submit" style={{ borderRadius: "20px" }}>
          &#128270;
        </button>
      </form>

      <form className="d-flex mx-2" role="search" onSubmit={fetchSearchResults}>
        <input
          className="form-control"
          type="search"
          placeholder="Search blogs"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="btn" type="submit" style={{ borderRadius: "20px" }}>
          &#128270;
        </button>
      </form>

      <Link className="nav-link text-danger" href="/cart">
        <BsFillCartCheckFill size={25} /> {cartItems?.length}
      </Link>

      {status === "authenticated" ? (
        <div className="d-flex">
          <Link
            className="nav-link"
            href={`/dashboard/${
              data?.user?.role === "admin" ? "admin" : "user"
            }`}
          >
            {data.user.name} ({data?.user?.role})
          </Link>
          <a
            className="nav-link pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="d-flex">
          <Link className="nav-link" href="/login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
