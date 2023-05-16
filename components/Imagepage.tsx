



"use client"


import React from 'react'
import Image from 'next/image'
type ImageProps = {
  src: string
  height?: number
  width?: number
  alt?: string|"image"
}

const Imagepage:React.FC<ImageProps> = ({src,height,width,alt}) => {
  return (
    <Image
    src={src}
    height={height}
    width={width}
    alt="image"
    />
    
  )
}

export default Imagepage