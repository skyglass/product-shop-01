import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Stars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // push all gold stars
      stars.push(<FaStar key={i} className="text-danger" />);
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
      // push half gold star if any
      stars.push(<FaStarHalfAlt key={i} className="text-danger" />);
    } else {
      // push empty star
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <>{stars}</>;
}
