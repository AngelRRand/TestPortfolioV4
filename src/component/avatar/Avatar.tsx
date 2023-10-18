import React from 'react'
import styles from './Avatar.module.scss';
import Image from 'next/image';
import data from "../../../public/assets/create_character/data.json"
import HumanColors from './hair/human/HumanColors';
import CatColors from './hair/cat/CatColors';


const Avatar: React.FC<AvatarConfig> = ({
                                            gender,
                                            base,
                                            hair,
                                            suit,
                                            color,
                                        }) => {


    let raza = data[base]


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
                    color={colorPrincipal}
                    secondColor={colorSecond}
                    position={color}
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
                    color={colorPrincipal}
                    secondColor={colorSecond}
                    position={color}
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

            </div>
        )
    }

}

export default Avatar