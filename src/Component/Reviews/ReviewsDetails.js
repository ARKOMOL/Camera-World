import React from 'react';

const ReviewsDetails = ({review}) => {
    // console.log(review);
    const {name,img,ratings,reviewss}=review
    return (
        <div className='shadow-lg rounded-2xl w-[280px] h-[430px] bg-white p-4'>
        <div className="reviewrs flex items-center justify-center mb-3 ">
        <img className='w-10 h-10 rounded-full flex items-center justify-center ' src={img} alt="" />
        <h1 className='text-2xl text-gray-600 px-3'>{name}</h1>
        </div>
        <h1>
      {reviewss}
        </h1>
        <h1 className='mt-2'>
            Rating: {ratings} ⭐⭐⭐⭐⭐
        </h1>
    </div>
    );
};

export default ReviewsDetails;