import ProductList from "@/components/product/ProductList";
import Pagination from "@/components/Pagination";
import ProductFilter from "@/components/product/ProductFilter";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Next Ecommerce",
  description: "Find the latest in fashion, electronics and more",
};

async function getProducts(searchParams) {
  const searchQuery = new URLSearchParams({
    page: searchParams?.page || 1,
    minPrice: searchParams?.minPrice || "",
    maxPrice: searchParams?.maxPrice || "",
    ratings: searchParams?.ratings || "",
    category: searchParams?.category || "",
    tag: searchParams?.tag || "",
    brand: searchParams?.brand || "",
  }).toString();

  try {
    const response = await fetch(`${process.env.API}/product?${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // next: { revalidate: 1 },
      // next: { cache: "no-store" },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();

    // Check if the response has products or is empty
    if (!data || !Array.isArray(data.products)) {
      throw new Error("No products returned.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    // Handle the error here, such as showing an error message to the user
    // or returning a default value
    return { products: [], currentPage: 1, totalPages: 1 };
  }
}

export default async function Prducts({ searchParams }) {
  // console.log("searchParams in products page => ", searchParams);
  const data = await getProducts(searchParams);

  return (
    <main>
      <div className="container-fluid">
        {/* replace "row" with "d-flex" to show sidebar inline in mobile */}
        <div className="d-flex">
          <div className="col-lg-3">
            <ProductFilter searchParams={searchParams} />
          </div>

          <div className="col-lg-9">
            <p className="text-center lead fw-bold">Latest Products</p>
            <ProductList products={data?.products} />
          </div>
        </div>

        <Pagination
          currentPage={data?.currentPage}
          totalPages={data?.totalPages}
          pathname="/products"
          searchParams={searchParams}
        />
      </div>
    </main>
  );
}
