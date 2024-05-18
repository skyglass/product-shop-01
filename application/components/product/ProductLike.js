"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

export default function ProductLike({ product }) {
  const { data, status } = useSession();
  // console.log("product", product);
  const [likes, setLikes] = useState(product?.likes);

  const router = useRouter();
  const pathname = usePathname();

  const isLiked = likes?.includes(data?.user?._id);

  const handleLike = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to like");
      router.push(`${process.env.DOMAIN}${pathname}`);

      return;
    }
    try {
      if (isLiked) {
        const answer = window.confirm("You liked it. Want to unlike?");
        if (answer) {
          handleUnlike();
        }
      } else {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product._id,
          }),
        };

        const response = await fetch(
          `${process.env.API}/user/product/like`,
          options
        );
        if (!response.ok) {
          throw new Error(
            `Failed to like: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        // console.log("product liked response => ", data);
        setLikes(data.likes);
        toast.success("Product liked");
        //router.refresh(); // only works in server components
      }
    } catch (err) {
      console.log(err);
      toast.error("Error liking product");
    }
  };

  const handleUnlike = async () => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
        }),
      };

      const response = await fetch(
        `${process.env.API}/user/product/unlike`,
        options
      );
      if (!response.ok) {
        throw new Error(
          `Failed to unlike: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      // console.log("product unliked response => ", data);
      setLikes(data.likes);
      toast.success("Product unliked");
        //router.refresh(); // only works in server components
    } catch (err) {
      console.log(err);
      toast.error("Error unliking product");
    }
  };

  // 🖤

  return (
    <>
      <small className="pointer">
        <span onClick={handleLike}>❤️ {likes?.length} likes</span>
      </small>
    </>
  );
}
