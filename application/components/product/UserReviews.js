import RatingDistribution from "@/components/product/RatingDistribution";
import Stars from "@/components/product/Stars";

export default function UserReviews({ reviews }) {
  return (
    <>
      {reviews?.length > 0 ? (
        <div>
          <RatingDistribution reviews={reviews} />

          {/* List of user reviews */}
          <ul className="list-group mt-4 bg-white">
            {reviews?.map((review) => (
              <li className="list-group-item mb-1" key={review?._id}>
                <div>
                  <p>
                    <strong>{review?.postedBy?.name}</strong>
                  </p>
                  <Stars rating={review?.rating} />
                  {review?.comment && <p className="mt-3">{review?.comment}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}
