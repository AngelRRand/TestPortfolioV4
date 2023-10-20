import React, {useEffect, useState} from 'react'
import styles from './Sprite.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";

// Human
import SpriteHuman from './hair/human/SpriteHuman'
import HumanHairSprite from "@/src/component/sprite/hair/human/HumanHairSprite";

// Cat
import SpriteCatMale from "@/src/component/sprite/hair/cat/SpriteCatMale";
import SpriteCatFemale from "@/src/component/sprite/hair/cat/SpriteCatFemale";
import CatHairSprite from "@/src/component/sprite/hair/cat/CatHairSprite";

const SpriteBox = () => {


    const [position, setPosition] = useState({x: 0, y: 0});
    const avatar = useSelector((state: RootState) => state.avatar);
    useEffect(() => {
        const updatePosition = () => {
            setPosition((prevPosition) => ({
                ...prevPosition,
                x: prevPosition.x === 96 ? 0 : prevPosition.x + 32,
            }));

            setTimeout(updatePosition, 200);
        };

        updatePosition();


    }, []);

    return (
        <div className={styles.box}>
            {
                avatar.base === 0 ? (
                    <>
                        <SpriteHuman x={position.x} y={position.y}/>
                        <HumanHairSprite
                            gender={avatar.gender}
                            hair={avatar.hair}
                            colors={avatar.colors}
                            position={position}
                        />
                    </>

                ) : (
                    <>
                        {
                            avatar.gender === 0 ? (
                                <SpriteCatMale x={position.x} y={position.y}/>
                            ) : (
                                <SpriteCatFemale x={position.x} y={position.y}/>
                            )
                        }
                        <CatHairSprite
                            position={position}
                            colors={avatar.colors}
                            hair={avatar.hair}
                            gender={avatar.gender}
                        />
                    </>
                )
            }

        </div>
    );
}

export default SpriteBox