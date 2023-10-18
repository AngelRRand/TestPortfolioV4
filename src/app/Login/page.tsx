"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import React, {useEffect, useState} from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import EditCharacter from './component/EditCharacter';
import EditNationality from './component/EditNationality';

import Resume from './component/Resume';
import {soundEffect} from "@/src/helper";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "@/src/redux";


import language from "../../../public/assets/create_character/language.json"
import {setSelectColor} from "@/src/redux/reducer/avatar";

export default function page() {


    /* App State */
    const [section, setSection] = useState("identity")

    const [input, setinput] = useState("")
    const [name, setName] = useLocalStorage('name', '');


    const nationality = useSelector((state: RootState) => state.avatar.nationality);
    const dispatch: Dispatch = useDispatch();

    const {login} = language[nationality]

    useEffect(() => {
        switch (nationality) {
            case 0:
                dispatch(setSelectColor(2))
                break
            case 1:
                dispatch(setSelectColor(3))
                break
            case 2:
                dispatch(setSelectColor(11))
                break
            case 3:
                dispatch(setSelectColor(8))
                break
        }
    }, [nationality])

    const selectSection = (text: string) => {
        soundEffect('/assets/sounds/btn.mp3')
        setSection(text)
    }

    return (
        <main className={styles.container}>
            <Stars/>
            <section className={styles.navegation}>
                <h1 onClick={() => selectSection("identity")}>{login.base.nationality}
                </h1>
                <h1 onClick={() => selectSection("edit")}>{login.base.edit}
                </h1>
                <h1 onClick={() => selectSection("resume")}>{login.base.resume}
                </h1>
            </section>

            <div className={styles.containerMain}>
                {
                    section === "identity" ? (
                        <EditNationality
                            nationality={nationality}
                            language={login.nationality}
                        />
                    ) : section === "edit" ? (
                        <EditCharacter
                            language={login.edit}
                        />
                    ) : (
                        <Resume

                        />
                    )
                }
            </div>


        </main>
    )
}

