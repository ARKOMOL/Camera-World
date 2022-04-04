import React from 'react';

const FullReviewsDetails = ({reviewFull}) => {
    // console.log(reviewFull.id);
    const {name,img,ratings,reviewss}=reviewFull
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
        <div className="reviewrs items-align-center justify-content-center">
        <img className='w-10 h-10 rounded-full ' src={img} alt="" />
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

export default FullReviewsDetails;