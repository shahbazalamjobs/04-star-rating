import React, { useState } from 'react';
import StarRating from './components/StarRating';
import './App.css'

const App = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='container'>
      <h1>Star Rating Example</h1>
      <div className='rating-container'>
        <StarRating totalStars={5} initialRating={rating} onChange={handleRatingChange} />
      </div>
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default App;
