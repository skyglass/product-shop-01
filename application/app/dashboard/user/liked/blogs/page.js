"use client";
import { useEffect, useState } from "react";
import BlogList from "@/components/blog/BlogList";

export default function UserDashboard() {
  const [likedBlogs, setLikedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.API}/user/blog/liked`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLikedBlogs(data);
      } catch (error) {
        console.error("Error fetching liked blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">Liked Blogs</p>
          <br />
          <BlogList blogs={likedBlogs} />
        </div>
      </div>
    </div>
  );
}
