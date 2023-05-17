
"use client"

import React, { useState } from 'react'
import LocationData from './LocationData'
import PropertyType from './PropertyType'
import MaxPrice from './MaxPrice'
import {SlMagnifier} from 'react-icons/sl'

const FloatBuy = () => {
    const [drop, setdrop] = useState(true)
    return (
        <div className='flex flex-row text-bold' >
            <div>
                <div>
                    {
                        <LocationData />
                    }
                </div>
                <h5>New York </h5>
            </div>
            <div>
                <div>
                    <PropertyType />
                </div>
                <h5>Duplex </h5>
            </div>
            <div>
                <div>
                    <MaxPrice />
                </div>
                <h5> $5000 </h5>
            </div>
            <div>
                <div>
                    <button>
                        <SlMagnifier />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FloatBuy