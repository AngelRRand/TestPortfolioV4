import React from 'react'
import StripesF from './female/Stripes'
import HalfF from './female/Half'
import HorizontalF from './female/Horizontal'
import VerticalF from './female/Vertical'

import StripesM from './male/Stripes'
import HalfM from './male/Half'
import HorizontalM from './male/Horizontal'
import VerticalM from './male/Vertical'
import {avatarHairMap} from "@/src/interface/avatar";


const CatColors: React.FC<avatarHairMap> = ({colors, hair, gender}) => {
    let colorsMap: any = []

    if (gender === 1) {
        colorsMap = [
            <StripesF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <HalfF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <HorizontalF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <VerticalF
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />
        ]
    } else {
        colorsMap = [
            <StripesM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <HalfM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <HorizontalM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            <VerticalM
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />
        ]
    }

    return (
        <>
            {colorsMap[hair]}
        </>
    )
}


export default CatColors