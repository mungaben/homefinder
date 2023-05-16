






import React from 'react'
import Buysellrent from './Buysellrent'
import Imagepage from '../Imagepage'

const Landing = () => {
    return (
        <div className=' flex  lg:mx-20 mx-auto w-full justify-between items-center  transition   '>
            <div className=' flex flex-col bg-transparent w-1/2 '>
                <div className='    top-8 bottom-10  w-full m-6 '>
                    <h1 className=" text-black tracking-widest text-4xl   w-full ">
                        <p  className=' font-bold my-5 shadow-none capitalize '>
                            Find Your Perfect  <span> Future Home</span>
                        </p>

                    </h1>
                    <h4>
                        <p className=' font-medium text-gray-700 tracking-wider  text-lg  top-4 bottom-4 c '>
                            search  confidently with your trusted source of homes for sale or rent
                        </p>
                    </h4>

                </div>
                <div className='   relative bg-rose-500 flex justify-center items-center w-1/2 p-4 m-4'>
                    <Buysellrent />

                </div>


            </div>
            <div className='w-1/2 flex  ml-0 pl-0 items-start justify-start h-full'>
                <Imagepage src={"/hous.png"} width={300} height={300} alt='house' />

            </div>


        </div>
    )
}

export default Landing