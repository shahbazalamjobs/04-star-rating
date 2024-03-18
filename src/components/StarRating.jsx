import React, { useState } from 'react';

const StarRating = ({ totalStars, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
    onChange(clickedIndex + 1);
  };

  const handleMouseEnter = (hoveredIndex) => {
    setHoverRating(hoveredIndex + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={(hoverRating >= starValue ? 'hover' : '') + (rating >= starValue ? ' selected' : '')}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
