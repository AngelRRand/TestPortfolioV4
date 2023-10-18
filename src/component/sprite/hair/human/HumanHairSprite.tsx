import React from "react";
import Degraded from "@/src/component/sprite/hair/human/female/Degraded";
import Short from "@/src/component/sprite/hair/human/female/Short";
import Broad from "@/src/component/sprite/hair/human/female/Broad";
import Curlers from "@/src/component/sprite/hair/human/female/Curlers";
import {spriteHairMap} from "@/src/interface/avatar";

const HumanHairSprite: React.FC<spriteHairMap> = ({gender, hair, colors, position}) => {

    let colorsMap: any = {}
    if (gender === 1) {

        colorsMap = {
            0: <Degraded
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            1: <Short
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            2: <Broad
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
            3: <Curlers
                position={position}
                colorPrincipal={colors.colorPrincipal}
                colorSecond={colors.colorSecond}
            />,
        }
    } else {
        colorsMap = {}
    }

    return (
        <>
            {colorsMap[hair]}
        </>
    )
}

export default HumanHairSprite