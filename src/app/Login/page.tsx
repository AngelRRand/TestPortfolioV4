"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import Image from 'next/image';
import Selector from './component/Selector';
import Avatar from '@/src/component/avatar/Avatar';

export default function page() {
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);


	let selectores = [
		{
			img: "/assets/icon/create_character/btnAdn.svg",
			style: "top",
			text: "Raza"
		},
		{
			img: "/assets/icon/create_character/btnPelo.svg",
			style: "mid",
			text: "Pelo"
		},
		{
			img: "/assets/icon/create_character/btnTraje.svg",
			style: "bottom",
			text: "Traje"
		},
		{
			img: "/assets/icon/create_character/btnColors.svg",
			style: "footer",
			text: "Color"
		},
	]

	return (
		<main className={styles.container}>
			<Stars />
			<section>
				<div>

					<Image
						width={450}
						height={450}
						alt='circule'
						src="/assets/Circulo.svg"
					/>

					{
						selectores.map((s, i) => (
							<Selector
								img={s.img}
								style={s.style}
								text={s.text}
								key={i}
								isSelected={i === selectedButtonIndex}
								onSelect={() => setSelectedButtonIndex(i)}
							/>
						))
					}
				</div>
				<div>

					<Avatar />

					<div className={styles.options}>
						<Image
							width={50}
							height={50}
							alt='circule'
							src="/assets/icon/create_character/hombre.svg"
						/>
						<Image
							width={50}
							height={50}
							alt='circule'
							src="/assets/icon/create_character/mujer.svg"
						/>
					</div>
				</div>
			</section>
			<section>

			</section>

		</main>
	)
}

