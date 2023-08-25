"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import Image from 'next/image';
import Selector from './component/Selector';

export default function page() {
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');


	return (
		<main className={styles.container}>
			<Stars />
			<section>
				<div>
					<Image
						width={500}
						height={500}
						alt='circule'
						src="/assets/Circulo.svg"
					/>
					<Selector/>
				</div>
				<div>
					{/* 
					<Image
						width={100}
						height={100}
						alt='Estrellas'
						src="/assets/Stars.gif"
						className={styles.stars}
						priority={true}
					/> 
					*/}
				</div>
			</section>
			<section>

			</section>

		</main>
	)
}

