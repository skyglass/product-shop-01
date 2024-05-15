export function calculateAverageRating(ratings) {
  let totalRating = 0;
  for (const ratingObj of ratings) {
    totalRating += ratingObj.rating;
  }
  const averageRating = totalRating / ratings.length;
  return averageRating;
}

export const stockStatus = (stock) => {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock <= 10) {
    return "Low Stock";
  }
  return null;
};
