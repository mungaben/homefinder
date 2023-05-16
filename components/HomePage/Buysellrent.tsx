







import React from 'react'
import Buy from './BuySell/Buy'
import Rent from './BuySell/Rent'
import Sell from './BuySell/Sell'

const Buysellrent = () => {
  return (
    <div className='  absolute flex mx-auto  w-full justify-center items-center '>
        <div className=' flex flex-row justify-evenly items-center w-full '>
            <div className=' flex justify-center items-center  '>
            <Buy/>

            </div>
            <div>
            <Sell/>
            </div>
            <div>
            <Rent/>
            </div>
            
        </div>
        

    </div>
  )
}

export default Buysellrent