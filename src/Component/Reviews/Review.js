import React, { useEffect, useState } from 'react';
import useReviews from '../Hooks/ReviewsOfClient';
import ReviewsDetails from './ReviewsDetails';





const Review = () => {
   const [reviews,setReviews] = useReviews()
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
            
            {
                reviews.slice(0,3).map(review=>(<ReviewsDetails key={review.id} review={review}></ReviewsDetails>))
            }
        </div>
    );
};

export default Review;