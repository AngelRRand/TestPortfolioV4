"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import EditCharacter from './component/EditCharacter';
import EditNacionality from './component/EditNacionality';

import language from "../../../public/assets/create_character/language.json"
import Resume from './component/Resume';

export default function page() {

    /* App State */
    const [section, setsection] = useState("identity")
    const [input, setinput] = useState("")
    const [name, setName] = useLocalStorage('name', '');
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioRefSelect = useRef<HTMLAudioElement | null>(null);

    /* Character state */
    const [nacionality, setNacionality] = useState(0)
    const [genderType, setGenderType] = useState(1)
    const [base, setBase] = useState(0)
    const [hair, setHair] = useState(0)
    const [suit, setsuit] = useState(0)
    const [colors, setcolors] = useState(0)
    const [selectColors, setselectColors] = useState(4)


    useEffect(() => {
        switch (nacionality) {
            case 0:
                setselectColors(5)
                break
            case 1:
                setselectColors(3)
                break
            case 2:
                setselectColors(10)
                break
            case 3:
                setselectColors(6)
                break
        }
    }, [nacionality])


    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        soundEffect(audioRef)
        setinput(inputValue)

    };

    const soundEffect = (audio: any) => {
        if (audio.current) {
            audio.current.currentTime = 0.1;
            audio.current.volume = 0.2;
            audio.current.play();
        }
    }

    const {login} = language[nacionality]

    return (
        <main className={styles.container}>
            <Stars/>
            <section className={styles.navegation}>
                <h1 onClick={() => {
                    soundEffect(audioRefSelect)
                    setsection("identity")
                }}>{login.base.nationality}
                </h1>
                <h1 onClick={() => {
                    soundEffect(audioRefSelect)
                    setsection("edit")
                }}>{login.base.edit}
                </h1>
                <h1 onClick={() => {
                    soundEffect(audioRefSelect)
                    setsection("name")
                }}>{login.base.resume}
                </h1>
            </section>

            <div className={styles.containerMain}>
                {
                    section === "identity" ? (
                        <EditNacionality
                            audioRefSelect={audioRefSelect}
                            soundEffect={soundEffect}
                            nacionality={nacionality}
                            setNacionality={setNacionality}
                            lenguage={login.nationality}
                        />
                    ) : section === "edit" ? (
                        <EditCharacter
                            genderType={genderType}
                            base={base}
                            hair={hair}
                            suit={suit}
                            colors={colors}
                            selectColors={selectColors}
                            audioRefSelect={audioRefSelect}
                            setGenderType={setGenderType}
                            soundEffect={soundEffect}
                            setBase={setBase}
                            setHair={setHair}
                            setcolors={setcolors}
                            setsuit={setsuit}
                            setselectColors={setselectColors}
                            lenguage={login.edit}
                        />
                    ) : (
                        <Resume

                        />
                    )
                }
            </div>


            <audio ref={audioRef} src="/assets/sounds/input.mp3" preload="auto"/>
            <audio ref={audioRefSelect} src="/assets/sounds/btn.mp3" preload="auto"/>

        </main>
    )
}

