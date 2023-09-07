"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useRef, useState, ChangeEvent, useEffect } from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import Image from 'next/image';
import Selector from './component/Selector';
import Avatar from '@/src/component/avatar/Avatar';
import data from "../../../public/assets/create_character/data.json"

let selectores = [
	{
		img: "/assets/icon/create_character/btnAdn.svg",
		style: "top",
		text: "Raza",
		id: "base"
	},
	{
		img: "/assets/icon/create_character/btnPelo.svg",
		style: "mid",
		text: "Pelo",
		id: "hair"
	},
	{
		img: "/assets/icon/create_character/btnTraje.svg",
		style: "bottom",
		text: "Traje",
		id: "suit"
	},
	{
		img: "/assets/icon/create_character/btnColors.svg",
		style: "footer",
		text: "Color",
		id: "color"
	},
]

export default function page() {
	/* App State */
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	/* Character state */
	const [genderType, setGenderType] = useState(1)
	const [base, setBase] = useState(0)
	const [hair, setHair] = useState(0)
	const [suit, setsuit] = useState(0)
	const [colors, setcolors] = useState(0)


	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		if (audioRef.current) {
			audioRef.current.currentTime = 0.1;
			audioRef.current.volume = 1;
			audioRef.current.play();
		}
		setinput(inputValue)
	};

	



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

					<Avatar
						gender={genderType}
						base={base}
						hair={hair}
						suit={suit}
						color={colors}
					/>

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
				<h1>{selectores[selectedButtonIndex].text}</h1>
				<div>
					{
						data.map((o, i) => {
							return (
								<>

									<article>
										<Avatar 
											gender={genderType}
											base={i}
											hair={hair}
											suit={suit}
											color={colors}
										/> 

										<h4>{o.name}</h4>
									</article>
								</>
							)
						})
					}

				</div>
			</section>
			<input placeholder='nombre' onChange={(e) => handleChangeInput(e)} className={styles.input} />
			<audio ref={audioRef} src="/assets/sounds/input.mp3" preload="auto" />

		</main>
	)
}

