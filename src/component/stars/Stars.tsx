import React from 'react'
import Image from 'next/image'
import styles from './Stars.module.scss';

export default function Stars() {
  return (
    <Image
      width={100}
      height={100}
      alt='Estrellas'
      src="/assets/Stars.gif"
      className={styles.stars}
      priority={true}
    />
  )
}
