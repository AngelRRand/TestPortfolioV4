import styles from "@/src/app/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {LinkPlanet} from "@/src/interface";

const LinkPlanet: React.FC<LinkPlanet> = ({link, title, planet, pointer, style}) => {


    return (
        <Link href={link} className={`${styles.home_link} ${styles[style]}`}>
            <Image
                src={planet.img}
                alt={planet.alt}
                width={100}
                height={100}
            />
            <span className='text_señal'>{title}</span>
            <Image
                src={pointer.img}
                alt={pointer.alt}
                width={80}
                height={80}
            />
        </Link>
    )
}


export default LinkPlanet