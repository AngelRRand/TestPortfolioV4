"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./Nav.module.scss"
import Avatar from "@/src/component/avatar/Avatar";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";
import useLocalStorageAvatar from "@/src/hooks/useLocalStorageAvatar";
import useLocalStorage from "@/src/hooks/useLocalStorage";

const Nav = () => {
    const [name, setName] = useLocalStorage('name', '');
    const [nameAvatar, setNameAvatar] = useState('');
    const [avatar, setAvatar] = useLocalStorageAvatar("avatar", null)

    const reduxAvatar = useSelector((state: RootState) => state.avatar);
    const {
        gender,
        base,
        hair,
        hairColor,
        suit,
        colors
    } = avatar || reduxAvatar;

    useEffect(() => {
        setNameAvatar(name)
    }, [name, avatar]);

    return (
        <header>
            {
                nameAvatar !== '' ? (
                    <nav className={styles.container} style={{opacity: 1}}>
                        <div className={styles.containerAvatar}>
                            <div className={styles.navAvatar}>
                                <Avatar
                                    gender={gender}
                                    base={base}
                                    hair={hair}
                                    hairColor={hairColor}
                                    suit={suit}
                                    colors={colors}
                                />
                            </div>
                            <h1 style={{color: 'white'}}>{nameAvatar}</h1>

                        </div>
                        <Link href={"/login"}>Login</Link>


                    </nav>
                ) : (
                    <nav className={styles.container} style={{opacity: 0}}>

                    </nav>

                )
            }
        </header>

    )
}
export default Nav