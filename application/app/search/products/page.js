"use client";
import { useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import { useSearchParams } from "next/navigation";
import { useProduct } from "@/context/product";

export default function ProductsSearchPage() {
  // context
  const {
    setProductSearchQuery,
    productSearchResults,
    setProductSearchResults,
  } = useProduct();
  // console.log("searchQuery in search page =====> ", searchQuery);

  const productSearchParams = useSearchParams();
  const query = productSearchParams.get("productSearchQuery");

  // to fetch results on page load based on query
  useEffect(() => {
    if (query) {
      console.log(
        "Got search params in search page => ",
        productSearchParams.get("productSearchQuery")
      );
      setProductSearchQuery(query);
      fetchProductResultsOnLoad(query);
    }
  }, [query]);

  const fetchProductResultsOnLoad = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/search/products?productSearchQuery=${query}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProductSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Search result {productSearchResults?.length}</p>
          {/* <pre>{JSON.stringify(searchResults, null, 4)}</pre> */}
          {productSearchResults ? (
            <ProductList products={productSearchResults} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
