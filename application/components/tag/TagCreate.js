"use client";
import { useTag } from "@/context/tag";
import { useCategory } from "@/context/category";
import { useEffect } from "react";

export default function AdminTagCreate() {
  // context
  const {
    name,
    setName,
    parentCategory,
    setParentCategory,
    updatingTag,
    setUpdatingTag,
    createTag,
    updateTag,
    deleteTag,
  } = useTag();
  const { fetchCategories, categories } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <p className="lead">Create Sub Category</p>
      <input
        type="text"
        value={updatingTag ? updatingTag?.name : name}
        placeholder="Tag Name"
        onChange={(e) =>
          updatingTag
            ? setUpdatingTag({
                ...updatingTag,
                name: e.target.value,
              })
            : setName(e.target.value)
        }
        className="form-control p-2 my-2"
      />

      <div className="form-group mt-4">
        <label>Parent category</label>
        <select
          name="category"
          className="form-control"
          onChange={(e) => setParentCategory(e.target.value)}
        >
          <option value="">Select one</option>
          {categories?.length > 0 &&
            categories?.map((c) => (
              <option
                key={c?._id}
                value={c?._id}
                selected={
                  c?._id === updatingTag?.parent || c?._id === parentCategory
                }
              >
                {c?.name}
              </option>
            ))}
        </select>
      </div>

      {/* <pre>{JSON.stringify(updatingTag, null, 4)}</pre> */}

      <div className="d-flex justify-content-between">
        <button
          className={`btn bg-${updatingTag ? "info" : "primary"} text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingTag ? updateTag() : createTag();
          }}
        >
          {updatingTag ? "Update" : "Create"}
        </button>

        {updatingTag && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();
                deleteTag();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => setUpdatingTag(null)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </>
  );
}
