"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Resizer from "react-image-file-resizer";

export default function AdminBlogUpdate({ params }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getBlog();
  }, [params]);

  async function getBlog() {
    try {
      const response = await fetch(`${process.env.API}/blog/${params.slug}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setId(data._id);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setImage(data.image);
      setPreview(data.image);
    } catch (error) {
      console.error("Error fetching blog:", error);
      // Handle error state or show a message to the user
    }
  }

  // cloudinary - click on settings icon > preset > unsigned
  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET); // replace with your upload_preset

  //     // upload to cloudinary
  //     try {
  //       const response = await fetch(process.env.CLOUDINARY_URL, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setImage(data.secure_url);
  //       } else {
  //         console.log("Image upload failed");
  //       }
  //     } catch (err) {
  //       console.log("Error uploading image:", err);
  //     }

  //     setLoading(false);
  //   }
  // };

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLoading(true);

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
              // console.log("IMAGE UPLOAD RES DATA", data);
              setImage(data);
            })
            .catch((err) => {
              console.log("CLOUDINARY UPLOAD ERR", err);
            })
            .finally(() => {
              setLoading(false);
            });
        },
        "base64"
      );
    }
  };

  const deleteImage = (public_id) => {
    setLoading(true);
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
        setImage({
          public_id: "",
          secure_url: "",
        });
      })
      .catch((err) => {
        toast.error("Image delete failed");
        console.log("CLOUDINARY DELETE ERR", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateBlog = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          category,
          image,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      // router.back();
      window.location.href = "/dashboard/admin/blog/list";
      toast.success("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  const handleDelete = async () => {
    try {
      if (image?.public_id) {
        // console.log("yes blog got image, delete it");
        deleteImage(image.public_id);
      }

      const response = await fetch(`${process.env.API}/admin/blog/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      // router.back();
      window.location.href = "/dashboard/admin/blog/list";
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p>Update blog</p>
          <label className="text-secondary">Blog title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control p-2 my-2"
          />

          <label className="text-secondary">Blog content</label>
          <ReactQuill
            className="border rounded my-2"
            value={content}
            onChange={setContent}
          />

          <label className="text-secondary">Blog category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control p-2 my-2"
          />

          {image?.secure_url && (
            <div className="d-flex justify-content-start align-items-center">
              <img
                src={image.secure_url}
                alt="preview"
                style={{ width: "100px" }}
              />
              <div
                className="text-center pointer ml-2"
                onClick={() => deleteImage(image.public_id)}
              >
                ❌
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary">
              <label className="mt-2" htmlFor="upload-button">
                {loading ? "Processing..." : "Upload image"}
              </label>
              <input
                id="upload-button"
                type="file"
                accept="image/*"
                hidden
                onChange={uploadImage}
              />
            </button>

            <button className="btn bg-primary text-light" onClick={updateBlog}>
              Update
            </button>
          </div>

          <div className="d-flex justify-content-end mt-5">
            <button
              diasabled={loading}
              onClick={handleDelete}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
