import styles from './ContainerPage.module.scss';
import Image from "next/image";
import React from "react";
import {ContainerPages} from "@/src/interface";
import Nav from "@/src/component/nav/Nav";

const ContainerPage: React.FC<ContainerPages> = ({styleContainer, styleStart, children}) => {


    return (
        <>
            <Nav/>

            <main className={`${styles[styleContainer]} ${styles.container}`}>

                <Image
                    width={100}
                    height={100}
                    alt='Estrellas'
                    src="/assets/Stars.gif"
                    className={`${styles[styleStart]} ${styles.star}`}
                    priority={true}
                />
                {children}
            </main>
        </>

    )
}


export default ContainerPage