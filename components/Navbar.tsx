




"use client"

import React from 'react'
import Logo from './Navbar/Logo'
import MiddleNav from './MiddleNav'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className=' flex  md:flex-row  mr-10 flex-col  '>
            {/* logo */}
            <div className=' flex flex-row  justify-center items-center   '>
             <Link href={'/'}>
             <Logo/>
             </Link>
               
                 <h3 className=' text-gray-800 font-bold text-3xl capitalize bg-transparent'>Mk homes </h3>
            </div>
            <div>
                <MiddleNav/>
            </div>

        </div>
    </nav>
  )
}

export default Navbar