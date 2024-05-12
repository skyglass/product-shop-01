"use client";
import { useEffect } from "react";
import { useTag } from "@/context/tag";
import Link from "next/link"; // Use Link from next/link

export default function TagsList({ category }) {
  // context
  const { tags, fetchTags, setUpdatingTag } = useTag();

  useEffect(() => {
    fetchTags();
  }, []);

  if (category) {
    // Display only filtered tags within Link
    const filteredTags = tags.filter((t) => t.parent?._id === category._id);

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            {filteredTags.map((t) => (
              <div key={t._id}>
                <Link href={`/tag/${t.slug}`} className="btn text-dark">
                  {t?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    // Display all tags as buttons
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            {tags.map((t) => (
              <div key={t._id}>
                <button
                  className="btn"
                  onClick={() => {
                    setUpdatingTag(t);
                  }}
                >
                  {t?.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
