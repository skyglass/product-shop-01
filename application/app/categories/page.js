"use client";
import { useEffect } from "react";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";
import Link from "next/link";

export default function CategoriesLayout() {
  const { fetchCategories, categories } = useCategory();
  const { fetchTags, tags } = useTag();

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {categories?.map((category) => (
          <div className="col-lg-4 mb-5">
            <Link
              href={`/category/${category.slug}`}
              key={category._id}
              className=" btn btn-danger btn-raised border-20 col p-4 mb-3"
            >
              {category?.name}
            </Link>

            <br />

            <div className="text-center">
              {tags
                .filter((tag) => tag?.parent?._id === category?._id)
                .map((tag) => (
                  <Link
                    href={`/tag/${tag.slug}`}
                    key={tag._id}
                    className="btn btn-outline-danger btn-raised border-20 m-1"
                  >
                    {tag.name}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
