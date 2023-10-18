import React, {useEffect, useState} from 'react'
import Sprite from './Sprite'
import styles from './Sprite.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";
import HumanHairSprite from "@/src/component/sprite/hair/human/HumanHairSprite";

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
            <Sprite position={position}/>
            <HumanHairSprite
                gender={avatar.gender}
                hair={avatar.hair}
                colors={avatar.colors}
                position={position}
            />
        </div>
    );
}

export default SpriteBox