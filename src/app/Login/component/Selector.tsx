import React, { useRef } from 'react';
import Image from 'next/image';
import styles from "../component/Selector.module.scss";
import { SelectorOption } from '@/src/interface';

const Selector: React.FC<SelectorOption> = ({ img, style, text, isSelected, onSelect }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const handleButtonClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        onSelect()
    };
    return (
        <button onClick={handleButtonClick} className={`${styles.btn} ${styles[style]}`}>
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
            <audio ref={audioRef} src="/assets/sounds/btn.mp3" preload="auto" />
        </button>
    )
}

export default Selector;