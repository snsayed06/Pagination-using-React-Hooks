import React, { useState, useEffect } from "react";
import Star from "./Star";
import "./Star.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  
useEffect(()=>{

},[rating, hoverRating])

  return (
    <div className='App'>
      <div className='flex-container'>
        {stars.map((star, i) => (
          <Star
          key={i}
          starId={i}
          rating={hoverRating || rating}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
