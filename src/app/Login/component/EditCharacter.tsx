import React, {useState} from 'react'
import Image from 'next/image';
import Selector from './Selector';
import Avatar from '@/src/component/avatar/Avatar';
import styles from './EditCharacter.module.scss';
import {editCharacter} from "@/src/interface/avatar";
import {setBase, setGender, setHair, setSelectColor, setSuit} from "@/src/redux/reducer/avatar";
import {Dispatch} from "@/src/redux";
import {useDispatch} from "react-redux";

// Json
import dataJson from "../../../../public/assets/create_character/data.json"
import colorsJson from "../../../../public/assets/create_character/colors.json"
import selectors from '../../../../public/assets/create_character/selectors.json'

const EditCharacter: React.FC<editCharacter> = ({avatar, language}) => {

    const [btnPress, setBtnPress] = useState("url(/assets/icon/create_character/btnFondoR.svg)")
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const dispatch: Dispatch = useDispatch();

    const {gender, base, hair, hairColor, suit, selectColor} = avatar

    const switchGender = (url: string, gender: number) => {
        dispatch(setGender(gender))
        setBtnPress(url)
    }


    return (
        <div className={styles.container}>
            <section>
                <div>
                    <Image
                        width={450}
                        height={450}
                        alt='circule'
                        src="/assets/cicle.svg"
                        priority
                    />
                    {
                        selectors.map((s, i) => (
                            <Selector
                                img={s.img}
                                style={s.style}
                                text={language.selectors[i]}
                                isSelected={i === selectedButtonIndex}
                                onSelect={() => setSelectedButtonIndex(i)}
                                key={i}

                            />
                        ))
                    }
                </div>
                <div>
                    <Avatar
                        gender={gender}
                        base={base}
                        hair={hair}
                        suit={suit}
                        color={hairColor}
                        colorPrincipal={colorsJson[selectColor].rgb}
                        colorSecond={colorsJson[selectColor].rgb}
                        showNationality={true}
                        flag={language.flag}
                    />


                    <div
                        className={styles.options}
                        style={{backgroundImage: btnPress}}
                    >
                        <div onClick={() => switchGender("url(/assets/icon/create_character/btnFondoL.svg)", 0)}>
                            <Image
                                width={50}
                                height={50}
                                alt='circule'
                                src="/assets/icon/create_character/btnMale.svg"
                            />
                        </div>

                        <div onClick={() => switchGender("url(/assets/icon/create_character/btnFondoR.svg)", 1)}>
                            <Image
                                width={50}
                                height={50}
                                alt='circule'
                                src="/assets/icon/create_character/btnGirl.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className={styles.title}>{language.selectors[selectedButtonIndex]}</h1>
                <div>
                    {
                        selectors[selectedButtonIndex].id === "base" ?
                            (
                                dataJson.map((o, i) => {
                                    return (
                                        <article key={i} onClick={() => dispatch(setBase(i))}>
                                            < Avatar
                                                gender={gender}
                                                base={i}
                                                hair={hair}
                                                suit={suit}
                                                color={hairColor}
                                                colorPrincipal={colorsJson[selectColor].rgb}
                                                colorSecond={colorsJson[selectColor].rgb}
                                                showNationality={false}
                                                flag={language.flag}

                                            />
                                            <h4 className={base === i ? styles.textShadowActive : styles.textShadowInactive}>{language.races[gender][i]}</h4>
                                        </article>
                                    )
                                })
                            ) :
                            selectors[selectedButtonIndex].id === "hair" ?
                                (
                                    dataJson[base].gender[gender].hair.map((o, i) => {
                                        return (
                                            <article key={i} onClick={() => dispatch(setHair(i))}>
                                                <Avatar
                                                    gender={gender}
                                                    base={base}
                                                    hair={i}
                                                    suit={suit}
                                                    color={i}
                                                    colorPrincipal={colorsJson[selectColor].rgb}
                                                    colorSecond={colorsJson[selectColor].rgb}
                                                    showNationality={false}
                                                    flag={language.flag}

                                                />
                                                <h4 className={hair === i ? styles.textShadowActive : styles.textShadowInactive}>{language.looks[i]}</h4>
                                            </article>
                                        )
                                    })
                                ) : selectors[selectedButtonIndex].id === "suit" ? (
                                    dataJson[base].gender[gender].suit.map((o, i) => {
                                        return (
                                            <article key={i} onClick={() => dispatch(setSuit(i))}>
                                                <Avatar
                                                    gender={gender}
                                                    base={base}
                                                    hair={hair}
                                                    suit={i}
                                                    color={hairColor}
                                                    colorPrincipal={colorsJson[selectColor].rgb}
                                                    colorSecond={colorsJson[selectColor].rgb2}
                                                    showNationality={false}
                                                    flag={language.flag}

                                                />
                                                <h4 className={hair === i ? styles.textShadowActive : styles.textShadowInactive}>{language.styles[i]}</h4>
                                            </article>
                                        )
                                    })
                                ) : (
                                    colorsJson.map((c, i) => {
                                        return (
                                            <div
                                                className={styles.color}
                                                onClick={() => dispatch(setSelectColor(i))}
                                                key={i}
                                            >
                                                <Image
                                                    width={50}
                                                    height={50}
                                                    alt='icon selector'
                                                    src={c.img}
                                                />
                                                {
                                                    selectColor === i ? (
                                                        <Image
                                                            width={50}
                                                            height={50}
                                                            alt='icon selector'
                                                            src={"/assets/create_character/svg/colors/active.svg"}
                                                        />
                                                    ) : (
                                                        <></>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                )

                    }

                </div>
            </section>
        </div>
    )
}

export default EditCharacter