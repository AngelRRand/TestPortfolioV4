import React, {useState} from 'react'
import Image from 'next/image';

// Components
import Selector from './Selector';
import Avatar from '@/src/component/avatar/Avatar';
import SpriteBox from "@/src/component/sprite/SpriteBox";
import SwitchGender from "./editCharacter/SwitchGender";

// Redux - Interface
import {editCharacter} from "@/src/interface/avatar";
import {Dispatch, RootState} from "@/src/redux";
import {useDispatch, useSelector} from "react-redux";
import {setBase, setHair, setSelectColor, setSuit} from "@/src/redux/reducer/avatar";
// Style
import styles from './EditCharacter.module.scss';

// Json
import dataJson from '@create_character/data.json'
import colorsJson from "@create_character/colors.json"
import selectors from '@create_character/selectors.json'
import {soundEffect} from "@/src/helper";


const EditCharacter: React.FC<editCharacter> = ({language}) => {


    let url = "url(/assets/icon/create_character/btnSwitchFondo.svg)"
    const [show, setShow] = useState(false)
    const [select, setSelect] = useState(0);
    const [btnSwitch, setBtnSwitch] = useState(url)

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


    const handleSwitch = () => {
        soundEffect('/assets/sounds/btn.mp3')
        if (!show) {
            setBtnSwitch("url(/assets/icon/create_character/btnSwitchFondoActive.svg)")
        } else {
            setBtnSwitch("url(/assets/icon/create_character/btnSwitchFondo.svg)")
        }
        setShow(!show)
    }


    return (
        <div className={styles.container}>
            <section>
                <div>
                    {
                        selectors.map((s, i) => (
                            <Selector
                                img={s.img}
                                style={s.style}
                                text={language.selectors[i]}
                                isSelected={i === select}
                                onSelect={() => setSelect(i)}
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
                        hairColor={hairColor}
                        colors={colors}
                    >

                        <div
                            style={{backgroundImage: btnSwitch}}
                            onClick={() => handleSwitch()} className={styles.switch}
                        >
                            <Image
                                src={'/assets/icon/create_character/btnSwitch.svg'}
                                alt='switch'
                                width={50}
                                height={50}
                            />
                        </div>

                        <SwitchGender
                            gender={gender}
                        />

                        <article style={{opacity: show ? 1 : 0}}>
                            <SpriteBox/>
                        </article>

                    </Avatar>


                </div>
            </section>


            <section>
                <h1 className={styles.title}>{language.selectors[select]}</h1>
                <div>
                    {
                        selectors[select].id === "base" ?
                            (
                                dataJson.map((o, i) => {
                                    return (
                                        <article key={i} onClick={() => dispatch(setBase(i))}>
                                            < Avatar
                                                gender={gender}
                                                base={i}
                                                hair={hair}
                                                suit={suit}
                                                hairColor={hairColor}
                                                colors={colors}

                                            />
                                            <h4 className={base === i ? styles.textShadowActive : styles.textShadowInactive}>{language.races[gender][i]}</h4>
                                        </article>
                                    )
                                })
                            ) :
                            selectors[select].id === "hair" ?
                                (
                                    dataJson[base].gender[gender].hair.map((o, i) => {
                                        return (
                                            <article key={i} onClick={() => dispatch(setHair(i))}>
                                                <Avatar
                                                    gender={gender}
                                                    base={base}
                                                    hair={i}
                                                    suit={suit}
                                                    hairColor={i}
                                                    colors={colors}

                                                />
                                                <h4 className={hair === i ? styles.textShadowActive : styles.textShadowInactive}>{language.looks[i]}</h4>
                                            </article>
                                        )
                                    })
                                ) : selectors[select].id === "suit" ? (
                                    dataJson[base].gender[gender].suit.map((o, i) => {
                                        return (
                                            <article key={i} onClick={() => dispatch(setSuit(i))}>
                                                <Avatar
                                                    gender={gender}
                                                    base={base}
                                                    hair={hair}
                                                    suit={i}
                                                    hairColor={hairColor}
                                                    colors={colors}
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