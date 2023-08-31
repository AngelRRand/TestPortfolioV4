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
	const [showGender, setShowGender] = useState(1)
	let selectores = [
		{
			img: "/assets/icon/create_character/btnAdn.svg",
			style: "top",
			text: "Raza"
		},
		{
			img: "/assets/icon/create_character/btnGesto.svg",
			style: "mid",
			text: "Gesto"
		},
		{
			img: "/assets/icon/create_character/btnPelo.svg",
			style: "bottom",
			text: "Pelo"
		},
		{
			img: "/assets/icon/create_character/btnTraje.svg",
			style: "footer",
			text: "Traje"
		},
	]

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
					
					{
						selectores.map(s => {
							return (
								<Selector
									img={s.img}
									style={s.style}
									text={s.text}
									
								/>
							)
						})
					}
				</div>
				<div>

					<Image
						width={265}
						height={265}
						alt='Estrellas'
						src="/assets/referen/Base.svg"
						className={styles.perfil}
						priority={true}
					/>
					<div className={styles.options}>
						<Image
							width={50}
							height={50}
							alt='circule'
							src="/assets/icon/create_character/hombre.svg"
							style={{opacity: showGender}}
						/>
						<Image
							width={50}
							height={50}
							alt='circule'
							src="/assets/icon/create_character/mujer.svg"
							style={{opacity: showGender}}
						/>
					</div>
				</div>
			</section>
			<section>

			</section>

		</main>
	)
}

