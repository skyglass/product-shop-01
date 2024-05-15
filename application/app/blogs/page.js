import BlogList from "@/components/blog/BlogList";
import Link from "next/link";

async function getBlogs(searchParams) {
  const urlParams = {
    page: searchParams?.page || 1,
  };

  const searchQuery = new URLSearchParams(urlParams).toString();
  console.log("searchQuery => ", searchQuery); // page=1

  const response = await fetch(`${process.env.API}/blog?${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if required
    },
    next: { revalidate: 1 },
    // cache: "no-store",
  });

  if (!response.ok) {
    console.log("Failed to fetch blogs => ", response);
    throw new Error("Failed to fetch blogs.");
  }

  const data = await response.json();
  return data;
}

export default async function Home({ searchParams }) {
  // console.log("searchParams => ", searchParams);
  const data = await getBlogs(searchParams);
  const { blogs, currentPage, totalPages } = data;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <main>
      <p className="text-center lead fw-bold">Latest Blogs</p>
      <BlogList blogs={blogs} />

      {/* <pre>{JSON.stringify(blogs, null, 4)}</pre> */}
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`/?page=${currentPage - 1}`}
                  as={`/?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

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
                    href={`/?page=${page}`}
                    // use 'as' to avoid interpreting it as a separate route
                    as={`/?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`/?page=${currentPage + 1}`}
                  as={`/?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </main>
  );
}
