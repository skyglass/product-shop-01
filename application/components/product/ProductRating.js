"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { useProduct } from "@/context/product";
import Modal from "@/components/Modal";
import Stars from "@/components/product/Stars";
import { calculateAverageRating } from "@/utils/helpers";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductRating({ product, leaveReview = true }) {
  // context
  const {
    showRatingModal,
    setShowRatingModal,
    currentRating,
    setCurrentRating,
    comment,
    setComment,
  } = useProduct();
  // to show the product average rating
  const [productRatings, setProductRatings] = useState(product?.ratings || []);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingText, setRatingText] = useState("Leave a rating");
  // console.log("average product ratings => ", productRatings);

  const { data, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // did current user already left a rating
  const alreadyRated = productRatings?.find(
    (rate) => rate?.postedBy?._id === data?.user?._id
  );

  useEffect(() => {
    if (alreadyRated) {
      setCurrentRating(alreadyRated?.rating);
      setComment(alreadyRated?.comment);
    } else {
      setCurrentRating(0);
      setComment("");
    }
  }, [alreadyRated]);

  console.log("currentRating => ", currentRating);
  console.log("comment => ", comment);

  useEffect(() => {
    if (productRatings) {
      const average = calculateAverageRating(productRatings);
      setAverageRating(average);
    }
  }, [product?.ratings]);

  const submitRating = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to leave a rating");
      router.push(`/login?callbackUrl=${process.env.NEXTAUTH_URL}${pathname}`);

      return;
    }
    try {
      const response = await fetch(`${process.env.API}/user/product/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product?._id,
          rating: currentRating,
          comment,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setProductRatings(data?.ratings);
        setShowRatingModal(false);
        // console.log("product rating response => ", data);
        toast.success("You left a rating");
        setRatingText("Update your rating");
        router.refresh(); // only works in server components
      } else if (response.status === 400) {
        const errorData = await response.json();
        toast.error(errorData.err);
      } else {
        // Handle other error scenarios
        toast.error("An error occurred. Please try again later.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error leaving a rating");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <small className="text-muted">
          <Stars rating={averageRating} /> (
          {productRatings?.length &&
            `In average ${averageRating?.toFixed(2)} stars out of 5 from ${
              productRatings?.length
            } reviews`}
          )
        </small>

        {leaveReview && (
          <small className="text-muted pointer">
            <span className="pointer" onClick={(e) => setShowRatingModal(true)}>
              {ratingText}
            </span>
          </small>
        )}
      </div>

      {/* rating modal */}

      {showRatingModal && (
        <Modal>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Write a review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="pointer">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <span
                  key={ratingValue}
                  className={
                    ratingValue <= currentRating ? "star-active lead" : "lead"
                  }
                  onClick={() => setCurrentRating(ratingValue)}
                  role="img"
                  // aria-label={
                  //   ratingValue <= currentRating ? (
                  //     <FaStar className="text-danger" />
                  //   ) : (
                  //     <FaRegStar />
                  //   )
                  // }
                >
                  {ratingValue <= currentRating ? (
                    <FaStar className="text-danger" />
                  ) : (
                    <FaRegStar />
                  )}
                </span>
              );
            })}
          </div>

          <button
            onClick={submitRating}
            className="btn btn-primary btn-raised mt-3"
          >
            Submit
          </button>
        </Modal>
      )}
    </>
  );
}
