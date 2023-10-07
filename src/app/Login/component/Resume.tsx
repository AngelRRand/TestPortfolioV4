import React from 'react'
import styles from './Resume.module.scss';
import {useRouter} from "next/navigation";
import Link from "next/link";

const Resume = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Link href={`/Casa/${30}`}>Mover</Link>
        </div>
    )
}

export default Resume