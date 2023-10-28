"use client"
import './globals.css'
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
import {redirect} from "next/navigation";
import ContainerPage from "@/src/component/container/ContainerPage";
import styles from './Home.module.scss';

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
                <Link href={'/About'} className={`${styles.home_link} ${styles.home_about}`}>
                    <Image
                        src={"/assets/home/planetTierra.png"}
                        alt='Planet Terra galaxy link image'
                        className='pointer'
                        width={30}
                        height={30}
                        layout='responsive'
                    />
                    <span className='text_señal'>About</span>
                    <Image
                        src={"/assets/home/Señal.gif"}
                        alt='Pointer galaxy'
                        className='pointer señal'
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
        </ContainerPage>
    )
}
