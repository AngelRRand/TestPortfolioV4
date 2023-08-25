"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';

export default function page() {
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');


	return (
		<main className={styles.container}>
			<Stars />
			<section>
				<div>
					
				</div>
			</section>
			<section>

			</section>

		</main>
	)
}

