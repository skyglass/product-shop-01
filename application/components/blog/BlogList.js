import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="container mb-5">
      <div className="row g-4">
        {blogs?.map((blog) => (
          <div className="col-lg-4" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
