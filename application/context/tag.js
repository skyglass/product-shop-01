"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [updatingTag, setUpdatingTag] = useState(null);

  const createTag = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/tag`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          parent: parentCategory,
        }),
      });

      if (response.ok) {
        toast.success("Tag created successfully");
        const newlyCreatedTag = await response.json();
        setName("");
        setParentCategory("");
        setTags([newlyCreatedTag, ...tags]);
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating a tag");
    }
  };

  const fetchTags = async () => {
    try {
      const response = await fetch(`${process.env.API}/tags`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const updateTag = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/tag/${updatingTag._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingTag),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedTag = await response.json();

      // Update the categories state with the updated category
      setTags((prevTags) =>
        prevTags.map((t) => (t._id === updatedTag._id ? updatedTag : t))
      );

      // Clear the categoryUpdate state
      setUpdatingTag(null);
      setParentCategory("");

      toast.success("Tag updated successfully");
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while updating a tag");
    }
  };

  const deleteTag = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/tag/${updatingTag._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const deletedTag = await response.json();

      // Category deleted successfully, now update the categories state
      setTags((prevTags) => prevTags.filter((t) => t._id !== deletedTag._id));

      // Clear the categoryUpdate state
      setUpdatingTag(null);
      setParentCategory("");

      toast.success("Tag deleted successfully");
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the sub category");
    }
  };

  return (
    <TagContext.Provider
      value={{
        name,
        setName,
        parentCategory,
        setParentCategory,
        createTag,
        tags,
        setTags,
        fetchTags,
        updatingTag,
        setUpdatingTag,
        updateTag,
        deleteTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);
