import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [selectedRating, setSelectedRating] = useState(rating || 0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setSelectedRating(rating); // Ensure the selected rating updates when prop changes
  }, [rating]);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={24}
          className="cursor-pointer transition-colors duration-200"
          color={star <= (hover || selectedRating) ? "#ffc107" : "#e4e5e9"}
          onClick={() => {
            setSelectedRating(star);
            setRating(star);
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
        />
      ))}
    </div>
  );
};

export default StarRating;

