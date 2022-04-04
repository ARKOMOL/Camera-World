import React from 'react'
import { Link } from 'react-router-dom'
import FullReviews from '../FullReview/FullReviews'
import Review from '../Reviews/Review'


const Homepage = ({reviews}) => {
  return (
    <div className=' md:px-16 py-8'>
        
     <div className="grid  lg:grid-cols-2 sm:items-center">
     <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to Camera World <span className='text-6xl'>📸</span>
        </h1>
        <button className='py-2 px-3  mt-3 rounded-full bg-teal-200 border-none'>
          Explore Camera
        </button>
       
      </div>

      <div >
        <img className='' src="https://images.unsplash.com/photo-1533425962554-06f6d8c4dacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
     </div>
     {/* review part  */}
     <div>
    
          <h1 className='py-2 text-3xl items-center'>
            Customer Reviews
          </h1>
          <div className="  my-9  ">
          <Review/>
          </div>
        <button className='bg-teal-200 p-2 rounded-full border-none'>
            <Link to='/reviews' element={<FullReviews/>}>
            Show All Reviews
            </Link>
        </button>
        </div>
    </div>
  )
}

export default Homepage
