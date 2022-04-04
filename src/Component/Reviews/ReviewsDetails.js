import React from 'react';

const ReviewsDetails = ({review}) => {
    // console.log(review);
    const {name,img,ratings,reviewss}=review
    return (
        <div className='shadow-lg rounded-2xl mx-10 w-[350px] lg:w-[400px]  bg-white p-4 '>
            <div className="reviewrs items-center ">
            <img className='w-10 h-10 rounded-full items-center' src={img} alt="" />
            <h1>  Name: {name}</h1>
            </div>
            <h1>
            Reviews: {reviewss}
            </h1>
            <h1>
                Ratings: {ratings}
            </h1>
        </div>
    );
};

export default ReviewsDetails;