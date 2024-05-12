"use client";
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/navigation";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatingProduct, setUpdatingProduct] = useState(null);
  const [uploading, setUploading] = useState(false);
  // modal for image preview
  const [showImagePreviewModal, setShowImagePreviewModal] = useState(false);
  const [currentImagePreviewUrl, setCurrentImagePreviewUrl] = useState("");
  // modal for rating
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [comment, setComment] = useState("");
  // brands
  const [brands, setBrands] = useState([]);
  // text search
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [productSearchResults, setProductSearchResults] = useState([]);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // modal for image preview and ratings
  const openImagePreviewModal = (url) => {
    setCurrentImagePreviewUrl(url);
    setShowImagePreviewModal(true);
  };

  const closeModal = () => {
    setShowImagePreviewModal(false);
    setShowRatingModal(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const fetchProductSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.API}/search/products?productSearchQuery=${productSearchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductSearchResults(data);
      // console.log("search results => ", data);
      router.push(`/search/products?productSearchQuery=${productSearchQuery}`);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const uploadImages = (e) => {
    let files = e.target.files;

    let allUploadedFiles = updatingProduct
      ? updatingProduct.images || []
      : product
      ? product.images || []
      : [];

    if (files) {
      // Check if the total combined images exceed 10
      const totalImages = allUploadedFiles.length + files.length;
      if (totalImages > 4) {
        alert("You can't upload more than 4 images.");
        return;
      }

      setUploading(true);
      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const promise = new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            1280,
            720,
            "JPEG",
            100,
            0,
            (uri) => {
              fetch(`${process.env.API}/admin/upload/image`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: uri }),
              })
                .then((response) => response.json())
                .then((data) => {
                  // Insert the new image at the beginning of the array
                  allUploadedFiles.unshift(data);

                  resolve();
                })
                .catch((err) => {
                  console.log("CLOUDINARY UPLOAD ERR", err);
                  resolve();
                });
            },
            "base64"
          );
        });

        uploadPromises.push(promise);
      }

      Promise.all(uploadPromises)
        .then(() => {
          // Update the state after all images are uploaded
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                images: allUploadedFiles,
              })
            : setProduct({ ...product, images: allUploadedFiles });

          setUploading(false);
        })
        .catch((error) => {
          console.log("Error uploading images: ", error);
          setUploading(false);
        });
    }
  };

  const deleteImage = (public_id) => {
    setUploading(true);
    fetch(`${process.env.API}/admin/upload/image`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("IMAGE DELETE RES DATA", data);
        const filteredImages = updatingProduct
          ? updatingProduct.images.filter(
              (image) => image.public_id !== public_id
            )
          : product.images.filter((image) => image.public_id !== public_id);

        updatingProduct
          ? setUpdatingProduct({
              ...updatingProduct,
              images: filteredImages,
            })
          : setProduct({ ...product, images: filteredImages });
      })
      .catch((err) => {
        toast.error("Image delete failed");
        console.log("CLOUDINARY DELETE ERR", err);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const createProduct = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
        }),
      });

      if (response.ok) {
        const newlyCreatedProduct = await response.json();
        toast.success(`Product "${newlyCreatedProduct?.title}" created!`);
        router.push("/dashboard/admin/products");
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating the product");
    }
  };

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(`${process.env.API}/product?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("products in context => ", data?.length);

      setProducts(data.products);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const updateProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/product/${updatingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedProduct = await response.json();
      toast.success(`Product "${updatedProduct?.title}" updated!`);
      // router.push("/dashboard/admin/products");
      router.back();
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while updating the product");
    }
  };

  const deleteProduct = async () => {
    try {
      // delete the product images
      if (updatingProduct && updatingProduct.images) {
        // Map through updatingProduct.images and delete each image from Cloudinary
        for (const image of updatingProduct.images) {
          deleteImage(image.public_id);
        }
      }

      const response = await fetch(
        `${process.env.API}/admin/product/${updatingProduct._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const deletedProduct = await response.json();
      toast.error(`Product "${deletedProduct?.title}" deleted!`);
      // router.push("/dashboard/admin/products");
      router.back();
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the product");
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${process.env.API}/product/brands`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const brands = await response.json();
      setBrands(brands);

      // Update your state or do whatever you need with the brands data
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        createProduct,
        products,
        setProducts,
        currentPage,
        totalPages,
        fetchProducts,
        updatingProduct,
        setUpdatingProduct,
        updateProduct,
        deleteProduct,
        uploadImages,
        uploading,
        deleteImage,
        showImagePreviewModal,
        setShowImagePreviewModal,
        closeModal,
        openImagePreviewModal,
        currentImagePreviewUrl,
        showRatingModal,
        setShowRatingModal,
        currentRating,
        setCurrentRating,
        comment,
        setComment,
        // averageRating,
        // setAverageRating,
        brands,
        fetchBrands,
        productSearchQuery,
        setProductSearchQuery,
        fetchProductSearchResults,
        productSearchResults,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
