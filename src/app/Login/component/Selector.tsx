import React, { useRef } from 'react';
import Image from 'next/image';
import styles from "../component/Selector.module.scss";
import { SelectorOption } from '@/src/interface';

const Selector: React.FC<SelectorOption> = ({ img, style, text, isSelected, onSelect, soundEffect, audioRefSelect }) => {
    
    return (
        <button onClick={() => {
                soundEffect(audioRefSelect)
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
                style={{ opacity: isSelected ? 1 : 0 }}
            />
            
        </button>
    )
}

export default Selector;