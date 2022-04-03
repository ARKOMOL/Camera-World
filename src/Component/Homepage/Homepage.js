import React from 'react'
import { Link } from 'react-router-dom'
import Riview from '../Reviews/Review'
// import Header from '../Header/Header'

const Homepage = () => {
  return (
    <div className=' md:px-16 py-8'>
        
     <div className="flex">
     <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to Camera World <span className='text-6xl'>📸</span>
        </h1>
        <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>
          Explore Camera
        </button>
       
      </div>

      <div >
        <img className='h-20' src="https://images.unsplash.com/photo-1533425962554-06f6d8c4dacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
     </div>
     {/* review part  */}
     <div>
          <h1 className='py-2 text-3xl'>
            Customer Reviews
          </h1>
        <button className='bg-gray-300'>
            <Link to='/reviews' element={<Riview/>}>
            Show All Reviews
            </Link>
        </button>
        </div>
    </div>
  )
}

export default Homepage
