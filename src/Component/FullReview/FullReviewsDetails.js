import React from 'react';

const FullReviewsDetails = ({reviewFull}) => {
    // console.log(reviewFull.id);
    const {name,img,ratings,reviewss}=reviewFull
    return (
        <div className='shadow-lg rounded-2xl w-[350px] h-[400px] bg-white p-4'>
        <div className="reviewrs items-align-center">
        <img className='w-10 h-10 rounded-full text-center ' src={img} alt="" />
        <h1 className='text-2xl text-gray-600'>{name}</h1>
        </div>
        <h1>
      {reviewss}
        </h1>
        <h1>
            Ratings: {ratings}
        </h1>
    </div>
    );
};

export default FullReviewsDetails;