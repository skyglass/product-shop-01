import Link from "next/link";
import queryString from "query-string";

async function getBlogs(searchParams) {
  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = queryString.stringify(urlParams);

  const apiUrl = `${process.env.API}/blog?${searchQuery}`;

  const options = {
    method: "GET",
    // cache: "no-store",
    next: { revalidate: 1 },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function AdminBlogsList({ searchParams }) {
  const data = await getBlogs(searchParams);
  const { blogs, currentPage, totalPages } = data;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Blogs List</p>
          <hr />
          {blogs.map((blog, index) => (
            <div key={blog._id} className="d-flex justify-content-between">
              <p>{blog.title}</p>
              <Link
                href={`/dashboard/admin/blog/update/${blog.slug}`}
                className="text-danger"
              >
                Update
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
