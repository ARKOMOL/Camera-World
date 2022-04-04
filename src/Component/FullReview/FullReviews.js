import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/ReviewsOfClient';
import FullReviewsDetails from './FullReviewsDetails';

const FullReviews = () => {
    const [reviews,setReviews] = useReviews()
    return (
      <div>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {
                reviews.map(reviewfull=>(<FullReviewsDetails key={reviewfull.id} reviewFull ={reviewfull}></FullReviewsDetails>))
            }
        </div>
            <button className='w-20 rounded-xl'>
                <Link to='/' >Go Back</Link>
            </button>
      </div>
    );
};

export default FullReviews;