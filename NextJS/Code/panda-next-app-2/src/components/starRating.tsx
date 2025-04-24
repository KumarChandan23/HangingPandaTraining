import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StaticStarRatingProps {
  rating: number;         // e.g., 3.5
  totalStars?: number;    // default 5
}

const StaticStarRating: React.FC<StaticStarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        const starValue = index + 1;

        return (
          <div key={index}>
            {rating >= starValue ? (
              <FaStar className="text-yellow-400 text-xl" />
            ) 
            : rating >= starValue - 0.5 ? (
              <FaStarHalfAlt className="text-yellow-300 text-xl" />
            ) 
            : (
              <FaStar className="text-gray-300 text-xl" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StaticStarRating;
