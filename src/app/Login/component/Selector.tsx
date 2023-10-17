import React from 'react';
import Image from 'next/image';
import styles from "../component/Selector.module.scss";
import {SelectorOption} from '@/src/interface';
import {soundEffect} from "@/src/helper";

const Selector: React.FC<SelectorOption> = ({img, style, text, isSelected, onSelect,}) => {

    return (
        <button onClick={() => {
            soundEffect('/assets/sounds/btn.mp3')
            onSelect()
        }} className={`${styles.btn} ${styles[style]}`}>
            <Image
                width={50}
                height={50}
                alt='icon selector'
                src={img}
            />
            <span>{text}</span>
            <Image
                width={50}
                height={50}
                alt='circule'
                src="/assets/arrow.gif"
                style={{opacity: isSelected ? 1 : 0}}
            />

        </button>
    )
}

export default Selector;