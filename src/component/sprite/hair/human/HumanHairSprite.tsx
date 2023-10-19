import React from "react";
import DegradedF from "@/src/component/sprite/hair/human/female/Degraded";
import ShortF from "@/src/component/sprite/hair/human/female/Short";
import BroadF from "@/src/component/sprite/hair/human/female/Broad";
import CurlersF from "@/src/component/sprite/hair/human/female/Curlers";

import DegradedM from "@/src/component/sprite/hair/human/male/Degraded";
import ShortM from "@/src/component/sprite/hair/human/male/Short";
import BraidsM from "@/src/component/sprite/hair/human/male/Braids";
import CurlersM from "@/src/component/sprite/hair/human/male/Curlers";

import {spriteHairMap} from "@/src/interface/avatar";

const HumanHairSprite: React.FC<spriteHairMap> = ({gender, hair, colors, position}) => {


    let colorsMap: any = {}
    if (gender === 1) {

        colorsMap =
            [
                <DegradedF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <ShortF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <BroadF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />,
                <CurlersF
                    position={position}
                    colorPrincipal={colors.colorPrincipal}
                    colorSecond={colors.colorSecond}
                />
            ]

    } else {
        colorsMap = [
            <DegradedM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <ShortM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <BraidsM
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}/>,
            <CurlersM
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

export default HumanHairSprite