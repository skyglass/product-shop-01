import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import BlogLike from "@/components/blog/BlogLike";
import Image from "next/image";

dayjs.extend(relativeTime);

async function getBlog(slug) {
  const apiUrl = `${process.env.API}/blog/${slug}`;

  const options = {
    method: "GET",
    next: { revalidate: 1 },
    // cache: "no-store",
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

export default async function BlogViewPage({ params }) {
  //   console.log("params in single blog view => ", params);
  const blog = await getBlog(params?.slug);

  return (
    <div className="container mb-5">
      <div className="card">
        <div style={{ height: "350px", overflow: "hidden" }}>
          <Image
            src={blog?.image?.secure_url || "/images/new-wave.jpeg"}
            className="card-img-top"
            width={500}
            height={300}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt={blog.title}
          />
          {/* <img
            src={blog?.image?.secure_url || "/images/new-wave.jpeg"}
            className="card-img-top"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt={blog.title}
          /> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">{blog?.title}</h5>
          <div className="card-text">
            <div
              dangerouslySetInnerHTML={{
                __html: blog?.content,
              }}
            />
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <small className="text-muted">Category: {blog?.category}</small>
          <small className="text-muted">
            Author: {blog?.postedBy?.name || "Admin"}
          </small>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <BlogLike blog={blog} />
          <small className="text-muted">
            Posted {dayjs(blog?.updatedAt).fromNow()}
          </small>
        </div>
      </div>
    </div>
  );
}
