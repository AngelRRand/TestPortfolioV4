import React from 'react'
import DegradedF from './female/DegradedF'
import CurlersF from './female/CurlersF'
import LongF from './female/LongF'
import ShortF from './female/ShortF'

import DegradedM from './male/DegradedM'
import ShortM from './male/ShortM'
import BraidsM from './male/BraidsM'
import CurlersM from './male/CurlersM'

import { LooksColorSelector } from '@/src/interface';

const HumanColors: React.FC<LooksColorSelector> = ({ color, secondColor, position, gender }) => {
    let colorsMap: any = {}

    if (gender === 1) {
        colorsMap = {
            0: <DegradedF
                color={color}
                secondColor={secondColor}
            />,
            1: <ShortF
                color={color}
                secondColor={secondColor}
            />,
            2: <LongF
                color={color}
                secondColor={secondColor}
            />,
            3: <CurlersF
                color={color}
                secondColor={secondColor}
            />,
        }
    } else {
        colorsMap = {
            0: <ShortM
                color={color}
                secondColor={secondColor}
            />,
            1: <DegradedM
                color={color}
                secondColor={secondColor}
            />,
            2: <BraidsM
                color={color}
                secondColor={secondColor}
            />,
            3: <CurlersM
                color={color}
                secondColor={secondColor}
            />,
        }
    }

    return (
        <>
            {colorsMap[position]}
        </>
    )
}



export default HumanColors