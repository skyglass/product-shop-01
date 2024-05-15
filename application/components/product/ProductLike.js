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
      router.push(
        `/login?callbackUrl=${process.env.API.replace("/api", "")}${pathname}`
      );

      return;
    }
    try {
      let method = "POST";

      if (isLiked) {
        const answer = window.confirm("You liked it. Want to unlike?");
        if (answer) {
          method = "PUT";
        } else {
          return;
        }
      }

      const response = await fetch(`${process.env.API}/user/product/like`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error occured. Try again.`);
      }

      const data = await response.json();
      // console.log("product liked response => ", data);
      setLikes(data?.likes);
      toast.success(`Product ${method === "POST" ? "liked" : "unliked"}`);
      router.refresh(); // only works in server components
    } catch (err) {
      console.log(err);
      toast.error("Error liking product");
    }
  };

  // 🖤

  return (
    <small className="text-muted pointer">
      {!likes?.length ? (
        <span onClick={handleLike}>❤️ Be the first person to like</span>
      ) : (
        <span onClick={handleLike}>❤️ {likes?.length} people liked</span>
      )}
    </small>
  );
}
