

"use client";
import {  Cormorant_Garamond } from "@next/font/google"

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['cyrillic'],
  weight: '300'
})

import React, { useState } from 'react'
import {SlHome} from "react-icons/sl";
import FloatBuy from "./Floatbuy";
const Buy = () => {
  const [buyclick, setbuyclick] = useState(true)
   

  return (
    <>
    <div className=' text-2xnpm i next/fonts
    l m-4 p-2   flex flex-row   bg-red-400   '>
      <span className={`${buyclick&& "animate-ping"} m-3  flex ring-2 ring-red-300 rounded-full w-3 h-3 justify-center items-center    `}><SlHome size={5} color='red' /> </span>
      <button onClick={()=>setbuyclick((prev)=>!prev)} className={`cormorantGaramond.className  capitalize text-3xl  `} >
        buy


      </button>
      {
        buyclick && <div className=" flex relative ">
         <div className=" bg-yellow-500 absolute top-14 ml-0 -left-16 ">
<FloatBuy/>
         </div>
        </div>

      }
           
       </div>
       </>
  )
}

export default Buy