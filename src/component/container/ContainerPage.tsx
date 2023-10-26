import styles from './ContainerPage.module.scss';
import Image from "next/image";
import React from "react";
import {ContainerPages} from "@/src/interface";

const ContainerPage: React.FC<ContainerPages> = ({styleContainer, styleStart, children}) => {


    return (
        <main className={`${styles[styleContainer]}`}>
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
    )
}


export default ContainerPage