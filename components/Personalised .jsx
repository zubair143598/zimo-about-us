import React from 'react'

const Personalised  = () => {
  return (
    <div className='footer tracking-[3px]  bg-local mt-[20px] lg:mt-[60px] bg-center bg-no-repeat bg-cover' >
        <div className='grid justify-around items-center uppercase text-white grid-cols-2 lg:grid-cols-3' >
          <div>
            <img className=' w-[200px] lg:w-[500.74px] lg:ml-[60px] ml-3 ' src="../assistes/f1.png" alt="" />
          </div>
          <div className='lg:flex  hidden' ></div>
          <div className=' mt-[20px] mb-7 lg:mb-[522px]  lg:mt-[80px]'>
           <p className=' text-[14px] lg:text-[30px]'>Personalised for You</p>
           <p className='lg:pr-[80px] text-gray-300 font-medium mt-3 text-[10px] lg:text-[12px]'>Delivering thousands of personalised alerts everyday, our USERS can be first in line when that opportunity of a lifetime is here.</p>
           <p className='flex mt-[20px] lg:text-[21px] text-[14px]  lg:mt-[220px] justify-center   '>CREATE USER ID <img 
           className='lg:w-[44px] ml-3 w-[20px]'
           src="../assistes/f2.png" alt="" /></p>
          </div>
        </div>
    </div>
  )
}

export default Personalised 