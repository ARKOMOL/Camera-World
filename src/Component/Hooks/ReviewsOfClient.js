import { useEffect, useState } from "react";

const useReviews =()=>{
    const [reviews,setReview]=useState([]);
    

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res =>res.json())
        .then(data=>{
            // console.log(data);
            setReview(data)
        },[])
    
    })
    return [reviews,setReview];
}
export default useReviews;