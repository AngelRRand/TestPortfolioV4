"use client"
import React, {useEffect, useState} from "react";
import styles from "./Nav.module.scss"
import useLocalStorage from "@/src/hooks/useLocalStorage";

const Nav = () => {
    const [name, setName] = useLocalStorage('name', '');
    const [nameAvatar, setNameAvatar] = useState('')

    useEffect(() => {
        setNameAvatar(name)
    }, [name]);

    return (
        <header>
            <nav className={styles.container}>
                <h1 style={{color: 'white'}}>{nameAvatar}</h1>
            </nav>
        </header>

    )
}
export default Nav