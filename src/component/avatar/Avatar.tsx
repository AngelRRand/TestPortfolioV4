import React from 'react'
import styles from './Avatar.module.scss';
import Image from 'next/image';
import HumanColors from './hair/human/HumanColors';
import CatColors from './hair/cat/CatColors';

import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";

import {avatar} from "@/src/interface/avatar";

import data from "../../../public/assets/create_character/data.json"

const Avatar: React.FC<avatar> = ({children, gender, base, hair, hairColor, suit}) => {


    let raza = data[base]
    const colors = useSelector((state: RootState) => state.avatar.colors);


    if (raza.name === "Human") {
        let newdata = raza.gender[gender]

        return (
            <div className={styles.container}>
                <Image
                    width={400}
                    height={400}
                    alt='base'
                    src={newdata.base}
                    priority={true}
                />
                <Image
                    width={400}
                    height={400}
                    alt='hair'
                    src={newdata.hair[hair].img}
                    priority={true}
                />
                <HumanColors
                    color={colors.colorPrincipal}
                    secondColor={colors.colorSecond}
                    position={hairColor}
                    gender={gender}
                />
                {
                    newdata.suit[suit].img === "" ?
                        <></>
                        :

                        <Image
                            width={400}
                            height={400}
                            alt='suit'
                            src={newdata.suit[suit].img}
                            priority={true}
                        />
                }

                {children}

            </div>
        )
    } else {
        let newdata = raza.gender[gender]
        return (
            <div className={styles.container}>
                <Image
                    width={400}
                    height={400}
                    alt='base'
                    src={newdata.base}
                    priority={true}
                />

                <Image
                    width={400}
                    height={400}
                    alt='hair'
                    src={newdata.hair[hair].img}
                    priority={true}
                />


                <CatColors
                    color={colors.colorPrincipal}
                    secondColor={colors.colorSecond}
                    position={hairColor}
                    gender={gender}
                />
                {
                    newdata.suit[suit].img === "" ?
                        <></>
                        :

                        <Image
                            width={400}
                            height={400}
                            alt='suit'
                            src={newdata.suit[suit].img}
                            priority={true}
                        />
                }
                {children}

            </div>
        )
    }

}

export default Avatar