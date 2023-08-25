import Image from 'next/image'
import React from 'react'
import styles from "../component/Selector.module.scss"
export default function Selector() {
    return (
        <button className={styles.btn}>
            <Image
                width={50}
                height={50}
                alt='icon selector'
                src="/assets/icon/create_character/btnAdn.svg"
            />
            <div>
                <span>Raza</span>
            </div>
        </button>
    )
}
