import React from 'react'
import styles from './Avatar.module.scss';
import Image from 'next/image';
import HumanColors from './hair/human/HumanColors';
import CatColors from './hair/cat/CatColors';

import {avatar} from "@/src/interface/avatar";

import data from "../../../public/assets/create_character/data.json"

const Avatar: React.FC<avatar> = ({children, gender, base, hair, hairColor, suit, colors}) => {


    let raza = data[base]


    if (raza.name === "Human") {
        let newData = raza.gender[gender]

        return (
            <div className={styles.container}>
                <Image
                    width={400}
                    height={400}
                    alt='base'
                    src={newData.base}
                />
                <Image
                    width={400}
                    height={400}
                    alt='hair'
                    src={newData.hair[hair].img}
                />
                <HumanColors
                    colors={colors}
                    hair={hairColor}
                    gender={gender}
                />
                {
                    newData.suit[suit].img === "" ?
                        <></>
                        :

                        <Image
                            width={400}
                            height={400}
                            alt='suit'
                            src={newData.suit[suit].img}
                            priority={true}
                        />
                }

                {children}

            </div>
        )
    } else {
        let newData = raza.gender[gender]
        return (
            <div className={styles.container}>
                <Image
                    width={400}
                    height={400}
                    alt='base'
                    src={newData.base}
                />

                <Image
                    width={400}
                    height={400}
                    alt='hair'
                    src={newData.hair[hair].img}
                />


                <CatColors
                    colors={colors}
                    hair={hairColor}
                    gender={gender}
                />
                {
                    newData.suit[suit].img === "" ?
                        <></>
                        :

                        <Image
                            width={400}
                            height={400}
                            alt='suit'
                            src={newData.suit[suit].img}
                        />
                }
                {children}

            </div>
        )
    }

}

export default Avatar