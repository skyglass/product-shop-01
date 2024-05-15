"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";

export default function AdminCreateProduct() {
  // context
  const {
    product,
    setProduct,
    updatingProduct,
    setUpdatingProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadImages,
    uploading,
    deleteImage,
  } = useProduct();

  const { categories, fetchCategories } = useCategory();
  const { tags, fetchTags } = useTag();

  const imagePreviews = updatingProduct
    ? updatingProduct?.images
    : product
    ? product?.images
    : [];

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  return (
    <>
      <p className="lead">{updatingProduct ? "Update" : "Create"} Product</p>
      <input
        type="text"
        placeholder="Title"
        value={updatingProduct ? updatingProduct?.title : product?.title}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({ ...updatingProduct, title: e.target.value })
            : setProduct({ ...product, title: e.target.value })
        }
        className="form-control p-2 my-2"
      />

      <textarea
        placeholder="Description"
        value={
          updatingProduct ? updatingProduct.description : product?.description
        }
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                description: e.target.value,
              })
            : setProduct({ ...product, description: e.target.value })
        }
        className="form-control p-2 my-2"
      />

      <div className="form-group">
        <input
          type="number"
          placeholder="Price"
          min="1"
          name="price"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.price : product?.price}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  price: e.target.value,
                })
              : setProduct({ ...product, price: e.target.value });
          }}
        />
      </div>

      {updatingProduct && (
        <div className="form-group">
          <input
            type="number"
            placeholder="Previous Price"
            min="1"
            name="previousPrice"
            className="form-control p-2 my-2"
            value={updatingProduct?.previousPrice}
            onChange={(e) => {
              setUpdatingProduct({
                ...updatingProduct,
                previousPrice: e.target.value,
              });
            }}
          />
        </div>
      )}

      <div className="form-group">
        <input
          type="text"
          placeholder="Color"
          name="price"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.color : product?.color}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  color: e.target.value,
                })
              : setProduct({ ...product, color: e.target.value });
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.brand : product?.brand}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  brand: e.target.value,
                })
              : setProduct({ ...product, brand: e.target.value });
          }}
        />

        <div className="form-group">
          <input
            type="number"
            min="1"
            placeholder="Stock"
            name="Stock"
            className="form-control p-2 my-2"
            value={updatingProduct ? updatingProduct.stock : product?.stock}
            onChange={(e) => {
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    stock: e.target.value,
                  })
                : setProduct({ ...product, stock: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <select
            name="category"
            className="form-control p-2 my-2"
            onChange={(e) => {
              const categoryId = e.target.value;
              const categoryName =
                e.target.options[e.target.selectedIndex].getAttribute("name");
              const category = categoryId
                ? { _id: categoryId, name: categoryName }
                : null; // Set the category to null if no value is selected

              if (updatingProduct) {
                setUpdatingProduct({
                  ...updatingProduct,
                  category: category,
                });
              } else {
                setProduct({
                  ...product,
                  category: category,
                });
              }
            }}
            value={
              updatingProduct
                ? updatingProduct?.category?._id || "" // Make sure to handle the case when updatingProduct.category is null or undefined
                : product?.category?._id || "" // Make sure to handle the case when product.category is null or undefined
            }
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id} name={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className="d-flex justify-content-evenly align-items-center">
          {tags
            .filter(
              (ft) =>
                ft.parent ===
                (updatingProduct?.category?._id || product?.category?._id)
            )
            .map((tag) => (
              <div key={tag._id} className="form-check">
                <input
                  type="checkbox"
                  id={tag._id}
                  name="tags"
                  value={tag._id}
                  checked={(updatingProduct
                    ? updatingProduct?.tags
                    : product?.tags
                  )?.some((selectedTag) => selectedTag._id === tag._id)} // Check if the tag object is in the selected tags array
                  onChange={(e) => {
                    const tagId = e.target.value;
                    const tagName = tag?.name;

                    let selectedTags = updatingProduct
                      ? [...(updatingProduct?.tags ?? [])]
                      : [...(product?.tags ?? [])];

                    if (e.target.checked) {
                      selectedTags.push({ _id: tagId, name: tagName }); // Add the tag object to the selected tags array
                    } else {
                      selectedTags = selectedTags.filter(
                        (selectedTag) => selectedTag?._id !== tagId
                      );
                    }

                    if (updatingProduct) {
                      setUpdatingProduct({
                        ...updatingProduct,
                        tags: selectedTags,
                      });
                    } else {
                      setProduct({ ...product, tags: selectedTags });
                    }
                  }}
                />
                <label htmlFor={tag._id}>&nbsp;{tag.name}</label>
              </div>
            ))}
        </div>

        <div className="form-group mt-3">
          <label
            className={`btn btn-primary col-12 ${uploading ? "disabled" : ""}`}
          >
            {uploading ? "Processing..." : "Upload images"}
            <input
              type="file"
              multiple
              hidden
              accept="images/*"
              onChange={uploadImages}
              disabled={uploading}
            />
          </label>
        </div>

        <div className="d-flex justify-content-center">
          {imagePreviews?.length > 0
            ? imagePreviews.map((img) => (
                <div key={img.public_id}>
                  <img
                    src={img.secure_url}
                    className="img rounded-circle mx-1 shadow"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <br />
                  <div
                    className="text-center pointer"
                    onClick={() => deleteImage(img.public_id)}
                  >
                    ❌
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>

      {/* BUTTONS FOR UPDATE / DELETE */}

      <div className="d-flex justify-content-between mt-3">
        <button
          className={`btn btn-raised bg-${
            updatingProduct ? "info" : "primary"
          } text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingProduct ? updateProduct() : createProduct();
          }}
        >
          {updatingProduct ? "Update" : "Create"}
        </button>

        {updatingProduct && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();
                deleteProduct();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => window.location.reload()}
            >
              Clear
            </button>
          </>
        )}
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <pre>{JSON.stringify(product, null, 4)}</pre>
          </div>
          <dic className="col-6">
            <pre>{JSON.stringify(updatingProduct, null, 4)}</pre>
          </dic>
        </div>
      </div> */}
    </>
  );
}
