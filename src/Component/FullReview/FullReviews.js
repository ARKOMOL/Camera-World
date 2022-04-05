import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/useReview';
import FullReviewsDetails from './FullReviewsDetails';

const FullReviews = () => {
    const [reviews,setReviews] = useReviews()
    return (
      <div>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5">
            {
                reviews.map(reviewfull=>(<FullReviewsDetails key={reviewfull.id} reviewFull ={reviewfull}></FullReviewsDetails>))
            }
        </div >
           <span>
           <button className='  w-20 rounded-xl mt-5 py-2 bg-green-100 '>
                <Link to='/' >Go Back</Link>
            </button>
           </span>
      </div>
    );
};

export default FullReviews;