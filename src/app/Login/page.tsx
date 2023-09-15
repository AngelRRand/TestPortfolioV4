"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import React, { useRef, useState, ChangeEvent, useEffect } from 'react'
import styles from './Login.module.scss';
import Stars from '@/src/component/stars/Stars';
import EditCharacter from './component/EditCharacter';
import Arrows from '@/src/component/decorations/Arrows';
import EditNacionality from './component/EditNacionality';

let selectores = [
	{
		img: "/assets/icon/create_character/btnAdn.svg",
		style: "top",
		text: "Races",
		id: "base"
	},
	{
		img: "/assets/icon/create_character/btnPelo.svg",
		style: "mid",
		text: "Looks",
		id: "hair"
	},
	{
		img: "/assets/icon/create_character/btnTraje.svg",
		style: "bottom",
		text: "Styles",
		id: "suit"
	},
	{
		img: "/assets/icon/create_character/btnColors.svg",
		style: "footer",
		text: "Colors",
		id: "color"
	},
]

export default function page() {

	/* App State */
	const [section, setsection] = useState("navionality")
	const [input, setinput] = useState("")
	const [name, setName] = useLocalStorage('name', '');
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const audioRefSelect = useRef<HTMLAudioElement | null>(null);

	/* Character state */
	const [flag, setFlag] = useState("/assets/nacionality/argentina.gif")
	const [genderType, setGenderType] = useState(1)
	const [base, setBase] = useState(0)
	const [hair, setHair] = useState(0)
	const [suit, setsuit] = useState(0)
	const [colors, setcolors] = useState(0)
	const [selectColors, setselectColors] = useState(4)


	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		soundEffect(audioRef)
		setinput(inputValue)

	};

	const soundEffect = (audio: any) => {
		if (audio.current) {
			audio.current.currentTime = 0.01;
			audio.current.volume = 0.4;
			audio.current.play();
		}
	}

	return (
		<main className={styles.container}>
			<Stars />
			<section className={styles.navegation}>
				<h1 onClick={() => {
					soundEffect(audioRefSelect)
					setsection("navionality")
				}}>Nationality</h1>
				<h1 onClick={() => {
					soundEffect(audioRefSelect)
					setsection("edit")
				}}>Edit</h1>
				<h1 onClick={() => {
					soundEffect(audioRefSelect)
					setsection("name")
				}}>Name</h1>
			</section>

			<div className={styles.containerMain}>
				{
					section === "navionality" ? (
						<EditNacionality
							flag={flag}
							setFlag={setFlag}
							handleChangeInput={handleChangeInput}
							input={input}
						/>
					) : section === "edit" ? (
						<EditCharacter
							genderType={genderType}
							base={base}
							hair={hair}
							suit={suit}
							colors={colors}
							selectColors={selectColors}
							audioRefSelect={audioRefSelect}
							setGenderType={setGenderType}
							soundEffect={soundEffect}
							setBase={setBase}
							setHair={setHair}
							setcolors={setcolors}
							setsuit={setsuit}
							setselectColors={setselectColors}
						/>
					) : (
						<></>
					)
				}
			</div>



			{/* <input placeholder='nombre' onChange={(e) => handleChangeInput(e)} className={styles.input} /> */}
			<audio ref={audioRef} src="/assets/sounds/input.mp3" preload="auto" />
			<audio ref={audioRefSelect} src="/assets/sounds/btn.mp3" preload="auto" />

		</main>
	)
}

