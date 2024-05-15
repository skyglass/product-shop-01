"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import Image from "next/image";

export default function AdminProducts() {
  // context
  const {
    products,
    currentPage,
    totalPages,
    fetchProducts,
    setUpdatingProduct,
  } = useProduct();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div className="container mb-5">
      <div className="row">
        {products.map((product) => (
          <div
            className="col-lg-6 mb-4 pointer"
            onClick={() => {
              setUpdatingProduct(product);
              router.push(`/dashboard/admin/product`);
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <div style={{ height: "100px", overflow: "hidden" }}>
                  <Image
                    src={
                      product?.images?.[0]?.secure_url ||
                      "/images/new-wave.jpeg"
                    }
                    className="card-img-top"
                    width={500}
                    height={300}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    alt={product?.title}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h4>${product?.price.toFixed(2)}</h4>
                  <div className="card-text text-secondary">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          product?.description?.length > 160
                            ? `${product?.description.substring(0, 160)}...`
                            : product?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(currentPage, null, 4)}</pre> */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pathname={pathname}
      />

      {/* <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    href={`${pathname}?page=${page}`}
                    // use 'as' to avoid interpreting it as a separate route
                    as={`${pathname}?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div> */}
    </div>
  );
}
