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


export default function page() {
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
	const [options, setOptions] = useState([])
	const audioRef = useRef<HTMLAudioElement | null>(null);

	let newdata = data[0].gender.female


	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		if (audioRef.current) {
			audioRef.current.currentTime = 0.1;
			audioRef.current.volume = 1;
			audioRef.current.play();
		}
		setinput(inputValue)
	};

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
/* 
	useEffect(() => {
		setOptions(newdata)
	}, [selectedButtonIndex])
	 */

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
				<h1>{selectores[selectedButtonIndex].text}</h1>
				<div>
					{
						options?.map((o, i) => {
							return(
								<article></article>
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

