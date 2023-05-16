





"use client"




import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
    src={'/home.png'}
    alt='logo'
    width={50}
    height={50}
    className='cursor-pointer m-2 bg-transparent rounded-lg hover:shadow-md'
    />
  )
}

export default Logo

