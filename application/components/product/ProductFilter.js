"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { priceRanges } from "@/utils/filterData";
import Stars from "@/components/product/Stars";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";
import { useProduct } from "@/context/product";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

// page price ratings category tags brands

export default function ProductFilter({
  searchParams,
  pathname = "/products",
}) {
  const { minPrice, maxPrice, ratings, category, tag, brand } = searchParams;

  // context
  const { categories, fetchCategories } = useCategory();
  const { tags, fetchTags } = useTag();
  const { brands, fetchBrands } = useProduct();

  const router = useRouter();

  useEffect(() => {
    fetchCategories();
    fetchTags();
    fetchBrands();
  }, []);

  // classes
  const activeButton = "btn btn-sm btn-primary mx-1 border-20";
  const button = "btn btn-sm btn-secondary mx-1 border-20";

  const handleRemoveFilter = (filterName) => {
    const updatedSearchParams = { ...searchParams };
    delete updatedSearchParams[filterName];
    // Reset page to 1 when applying new filtering options
    updatedSearchParams.page = 1;

    const queryString = new URLSearchParams(updatedSearchParams).toString();
    const newUrl = `${pathname}?${queryString}`;

    router.push(newUrl);
  };

  return (
    <>
      <p className="lead">Filter Products</p>
      <Link href="/products" className="text-danger">
        Clear Filters
      </Link>

      <p className="text-primary mt-4 alert alert-secondary">Price</p>
      <div className="row d-flex align-items-center mx-1">
        {priceRanges.map((range) => {
          const url = {
            pathname,
            query: {
              ...searchParams,
              minPrice: range.min,
              maxPrice: range.max,
              page: 1,
            },
          };

          const isActive =
            minPrice === String(range.min) && maxPrice === String(range.max);

          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={range.label}
                href={url}
                as={url}
              >
                {range.label}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("minPrice", "maxPrice")}
                />
              )}
            </>
          );
        })}
      </div>

      <p className="text-primary mt-4 alert alert-secondary">Ratings</p>
      <div className="row d-flex align-items-center mx-1">
        {[5, 4, 3, 2, 1].map((ratingValue) => {
          const isActive = String(ratings) === String(ratingValue); // Compare as strings

          const url = {
            pathname,
            query: {
              ...searchParams,
              ratings: isActive ? undefined : ratingValue, // Clear if already active
              page: 1,
            },
          };
          return (
            <div key={ratingValue} className="d-flex align-items-center">
              <Link
                href={url}
                as={url}
                className={isActive ? activeButton : button}
              >
                <Stars rating={ratingValue} />
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("ratings")}
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="text-primary mt-4 alert alert-secondary">Categories</p>
      <div className="row d-flex align-items-center filter-scroll mx-1">
        {categories?.map((c) => {
          const isActive = category === c._id;

          const url = {
            pathname,
            query: {
              ...searchParams,
              category: c._id,
              page: 1,
            },
          };
          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={c._id}
                href={url}
                as={url}
              >
                {c.name}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("category")}
                />
              )}
            </>
          );
        })}
      </div>

      {category && (
        <>
          <p className="text-primary mt-4 alert alert-secondary">Tags</p>
          <div className="row d-flex align-items-center filter-scroll mx-1">
            {tags
              .filter((t) => t?.parent?._id && t?.parent?._id === category)
              ?.map((t) => {
                const url = {
                  pathname,
                  query: {
                    ...searchParams,
                    tag: t._id,
                    page: 1,
                  },
                };

                const isActive = tag === t._id;

                return (
                  <>
                    <Link
                      className={isActive ? activeButton : button}
                      key={t._id}
                      href={url}
                      as={url}
                    >
                      {t.name}
                    </Link>
                    {isActive && (
                      <FiX
                        className="pointer lead text-danger mb-1"
                        onClick={() => handleRemoveFilter("tag")}
                      />
                    )}
                  </>
                );
              })}
          </div>
        </>
      )}

      <p className="text-primary mt-4 alert alert-secondary">Brands</p>
      <div className="row d-flex align-items-center filter-scroll mx-1">
        {brands?.map((b) => {
          const url = {
            pathname,
            query: {
              ...searchParams,
              brand: b,
              page: 1,
            },
          };

          const isActive = brand === b;

          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={b}
                href={url}
                as={url}
              >
                {b}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("brand")}
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
