"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import useLocalStorage from "../hooks/useLocalStorage";
import {redirect} from "next/navigation";
import ContainerPage from "@/src/component/container/ContainerPage";
import styles from './Home.module.scss';
import './globals.css'

export default function Home() {
    const [name, setName] = useLocalStorage('name', '');

    console.log(name)
    useEffect(() => {
        if (name === '') {
            redirect("/Login")
        }
    })


    return (
        <ContainerPage styleContainer={'containerHome'} styleStart={'starHome'}>
            <div className={styles.containerGalaxy}>
                <Image
                    src={"/assets/galaxy.svg"}
                    alt='Home galaxy web'
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/galaxyBottom.svg"}
                    alt='Home galaxy web animation top'
                    width={100}
                    height={100}
                />
                <Image
                    src={"/assets/galaxyTop.svg"}
                    alt='Home galaxy web animation botton'
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.containerGalaxyGrid}>
                <div className={styles.casa}></div>
            </div>
        </ContainerPage>
    )
}
