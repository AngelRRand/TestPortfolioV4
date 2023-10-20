import React from "react";
import HalfF from "@/src/component/sprite/hair/cat/female/Half";
import HorizontalF from "@/src/component/sprite/hair/cat/female/Horizontal";
import StripesF from "@/src/component/sprite/hair/cat/female/Stripes";
import VerticalF from "@/src/component/sprite/hair/cat/female/Vertical";

import HalfM from "@/src/component/sprite/hair/cat/male/Half";
import HorizontalM from "@/src/component/sprite/hair/cat/male/Horizontal";
import StripesM from "@/src/component/sprite/hair/cat/male/Stripes";
import VerticalM from "@/src/component/sprite/hair/cat/male/Vertical";

import {spriteHairMap} from "@/src/interface/avatar";

const CatHairSprite: React.FC<spriteHairMap> = ({gender, hair, colors, position}) => {


    let colorsMap: any = []
    if (gender === 1) {

        colorsMap =
            [
                <StripesF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <HalfF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <HorizontalF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <VerticalF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />
            ]

    } else {
        colorsMap = [
            <StripesM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <HalfM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <HorizontalM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <VerticalM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
        ]
    }

    return (
        <>
            {colorsMap[hair]}
        </>
    )
}

export default CatHairSprite