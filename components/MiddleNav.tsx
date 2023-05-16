
"use client"




import React from 'react'
import Link from 'next/link'

const MiddleNav = () => {
  return (
    <div className=' md:mx-24  h-full top-2 flex md:flex-row flex-col  md:p-4 justify-center md:items-center text-3xl  text-transparent font-medium md:tracking-wide  '>
        {/* home */}
        <div className=' md:m-4  m-2 md:px-6 sm:hover:shadow-lg w-full md:hover:shadow-none cursor-pointer '>
            <Link href="/Home"> 
                <h3 className="text-2xl font-bold text-gray-700">Home</h3>
            </Link>
     
        </div>
        <div  className=' md:m-4  m-2 md:px-6 sm:hover:shadow-lg w-full md:hover:shadow-none ' >
            <Link href="/Buy">
                <h3 className="text-2xl font-bold text-gray-700">Buy</h3>
            </Link>
        </div>
        <div className=' md:m-4  m-2 md:px-6 sm:hover:shadow-lg w-full md:hover:shadow-none '>
            <Link href="/Sell">
                <h3 className="text-2xl font-bold text-gray-700">Sell</h3>
            </Link>
        </div>
        <div className=' md:m-4  m-2 md:px-6 sm:hover:shadow-lg w-full md:hover:shadow-none '>
            <Link href="/Review">
                <h3 className="text-2xl font-bold text-gray-700">Review</h3>
            </Link>
        </div>
      

        <div>
        </div>



    </div>
  )
}

export default MiddleNav