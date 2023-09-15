import { useState, useEffect } from 'react';
import Image from 'next/image'
import React from 'react'

const Arrows = () => {

    const [number, setNumber] = useState(true)

    useEffect(() => {
        setTimeout(()=> {

            setNumber(!number)
        },1200)
    
    }, [number])
    
    return (
        <div>
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 1 : 0 }}
            />,
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 0 : 1 }}

            />,
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 1 : 0 }}

            />,
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 0 : 1 }}

            />,
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 1 : 0}}

            />,
            <Image
                width={30}
                height={30}
                alt='circule'
                src="/assets/arrowSmall.svg"
                style={{ opacity: number ? 0 : 1 }}

            />
        </div>
    )
}

export default Arrows