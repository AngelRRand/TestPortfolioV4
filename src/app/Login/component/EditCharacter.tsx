import React, {useState} from 'react'
import Image from 'next/image';

// Components
import Selector from './Selector';
import Avatar from '@/src/component/avatar/Avatar';

// Redux
import {editCharacter} from "@/src/interface/avatar";
import {Dispatch, RootState} from "@/src/redux";
import {useDispatch, useSelector} from "react-redux";
import {setBase, setHair, setSelectColor, setSuit} from "@/src/redux/reducer/avatar";

// Style
import styles from './EditCharacter.module.scss';

// Json
import dataJson from "../../../../public/assets/create_character/data.json"
import colorsJson from "../../../../public/assets/create_character/colors.json"
import selectors from '../../../../public/assets/create_character/selectors.json'
import SwitchGender from "@/src/app/Login/component/editCharacter/SwitchGender";
import SpriteBox from "@/src/component/sprite/SpriteBox";

const EditCharacter: React.FC<editCharacter> = ({language}) => {

    const [show, setShow] = useState(true)
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    const avatar = useSelector((state: RootState) => state.avatar);
    const dispatch: Dispatch = useDispatch();

    const {
        gender,
        base,
        hair,
        hairColor,
        suit,
        selectColor,
        colors
    } = avatar;


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
                        flag={language.flag}
                    >

                        {
                            show ? (
                                <>
                                    <Image
                                        width={50}
                                        height={50}
                                        alt='circule'
                                        src={flag}
                                        className={styles.flag}
                                    />
                                    <h2 onClick={() => setShow(!show)} className={styles.switch}>Switch</h2>
                                    <article style={{opacity: show ? 1 : 0}}>
                                        <SpriteBox
                                            color={colors.colorPrincipal}
                                            secondColor={colors.colorSecond}
                                        />
                                    </article>
                                </>
                            ) : (
                                <></>
                            )
                        }

                    </Avatar>

                    <SwitchGender/>

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