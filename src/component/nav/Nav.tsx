"use client"
import React, {useEffect, useState} from "react";
import styles from "./Nav.module.scss"
import useLocalStorage from "@/src/hooks/useLocalStorage";
import Avatar from "@/src/component/avatar/Avatar";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";

const Nav = () => {
    const [name, setName] = useLocalStorage('name', '');
    const [nameAvatar, setNameAvatar] = useState('');

    const avatar = useSelector((state: RootState) => state.avatar);

    const {
        gender,
        base,
        hair,
        hairColor,
        suit,
    } = avatar;

    useEffect(() => {
        setNameAvatar(name)
    }, [name]);

    return (
        <header>
            <nav className={styles.container}>
                <div>
                    <Avatar
                        gender={gender}
                        base={base}
                        hair={hair}
                        hairColor={hairColor}
                        suit={suit}
                    />
                    <h1 style={{color: 'white'}}>{nameAvatar}</h1>
                </div>
                <h1 style={{color: 'white'}}>{nameAvatar}</h1>
                <h1 style={{color: 'white'}}>{nameAvatar}</h1>

            </nav>
        </header>

    )
}
export default Nav