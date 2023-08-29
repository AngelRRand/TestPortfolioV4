import Image from 'next/image'
import React from 'react'
import styles from "../component/Selector.module.scss"
import { SelectorOption } from '@/src/interface'

const Selector: React.FC<SelectorOption> = ({img, style, text}) => {
    return (
        <button className={`${styles.btn} ${styles[style]}`}>
            <Image
                width={50}
                height={50}
                alt='icon selector'
                src={img}
            />
            <div>
                <span>{text}</span>
            </div>
        </button>
    )
}


export default Selector