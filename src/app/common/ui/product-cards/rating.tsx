// Star component for rendering stars
const Star = ({ filled }: { filled: boolean }) => {
  return filled ? "★" : "☆";
};

// Rating component
export const ProductRating = ({ ratings }: { ratings: number[] }) => {
  // Calculate the average rating
  const calculateAverageRating = (ratings: number[]) => {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
  };

  const averageRating = parseInt(calculateAverageRating(ratings).toFixed(1)); // round to 1 decimal place
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;

  return (
    <div
      className="flex gap-2 flex-row items-center text-orange-500"
      style={{ fontSize: "1.2rem" }}
    >
      {Array(fullStars)
        .fill(undefined)
        .map((_, index) => (
          <Star key={index} filled={true} />
        ))}
      {hasHalfStar && <Star filled={true} />} {/* Show half star */}
      {Array(5 - fullStars - (hasHalfStar ? 1 : 0))
        .fill(undefined)
        .map((_, index) => (
          <Star key={index} filled={false} />
        ))}
      <span className="text-black text-xs font-bold">
        {`${averageRating}  (${ratings.length})`}
      </span>
    </div>
  );
};
