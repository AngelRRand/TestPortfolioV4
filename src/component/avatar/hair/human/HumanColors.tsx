import React from 'react'
import DegradedF from './female/DegradedF'
import CurlersF from './female/CurlersF'
import LongF from './female/LongF'
import ShortF from './female/ShortF'

import DegradedM from './male/DegradedM'
import ShortM from './male/ShortM'
import BraidsM from './male/BraidsM'
import CurlersM from './male/CurlersM'

import {avatarHairMap} from "@/src/interface/avatar";

const HumanColors: React.FC<avatarHairMap> = ({colors, hair, gender}) => {
    let colorsMap: any = {}

    if (gender === 1) {
        colorsMap = {
            0: <DegradedF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            1: <ShortF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            2: <LongF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            3: <CurlersF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
        }
    } else {
        colorsMap = {
            0: <DegradedM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            1: <ShortM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            2: <BraidsM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            3: <CurlersM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
        }
    }

    return (
        <>
            {colorsMap[hair]}
        </>
    )
}


export default HumanColors