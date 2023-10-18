import React from 'react'
import StripesF from './female/Stripes'
import HalfF from './female/Half'
import HorizontalF from './female/Horizontal'
import VerticalF from './female/Vertical'

import StripesM from './male/Stripes'
import HalfM from './male/Half'
import HorizontalM from './male/Horizontal'
import VerticalM from './male/Vertical'


const CatColors: React.FC<LooksColorSelector> = ({ color, secondColor, position, gender }) => {
    let colorsMap: any = {}

    if (gender === 1) {
        colorsMap = {
            0: <StripesF
                color={color}
                secondColor={secondColor}
            />,
            1: <HalfF
                color={color}
                secondColor={secondColor}
            />,
            2: <HorizontalF
                color={color}
                secondColor={secondColor}
            />,
            3: <VerticalF
                color={color}
                secondColor={secondColor}
            />,
        }
    } else {
        colorsMap = {
            0: <StripesM
                color={color}
                secondColor={secondColor}
            />,
            1: <HalfM
                color={color}
                secondColor={secondColor}
            />,
            2: <HorizontalM
                color={color}
                secondColor={secondColor}
            />,
            3: <VerticalM
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



export default CatColors