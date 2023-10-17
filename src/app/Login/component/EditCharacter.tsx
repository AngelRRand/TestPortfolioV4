import React, { useState } from 'react'
import Image from 'next/image';
import Selector from './Selector';
import Avatar from '@/src/component/avatar/Avatar';
import colorsJson from "../../../../public/assets/create_character/colors.json"
import data from "../../../../public/assets/create_character/data.json"
import styles from './EditCharacter.module.scss';
import { editCharacter } from '@/src/interface';

let selectores = [
	{
		img: "/assets/icon/create_character/btnAdn.svg",
		style: "top",
		text: "races",
		id: "base"
	},
	{
		img: "/assets/icon/create_character/btnPelo.svg",
		style: "mid",
		text: "looks",
		id: "hair"
	},
	{
		img: "/assets/icon/create_character/btnTraje.svg",
		style: "bottom",
		text: "styles",
		id: "suit"
	},
	{
		img: "/assets/icon/create_character/btnColors.svg",
		style: "footer",
		text: "colors",
		id: "color"
	},
]

const EditCharacter: React.FC<editCharacter> = ({ genderType, base, hair, suit, colors, selectColors, audioRefSelect, setGenderType, soundEffect, setBase, setHair, setcolors, setsuit, setselectColors, lenguage }) => {

	const [btnPress, setBtnPress] = useState("url(/assets/icon/create_character/btnFondoR.svg)")
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
	const [showSprite, setShowSprite] = useState(0)

	return (
		<div className={styles.container}>
			<section>
				<div>
					<Image
						width={450}
						height={450}
						alt='circule'
						src="/assets/cicle.svg"
						priority
					/>
					{
						selectores.map((s, i) => (
							<Selector
								img={s.img}
								style={s.style}
								text={lenguage.selectors[i]}
								key={i}
								isSelected={i === selectedButtonIndex}
								onSelect={() => setSelectedButtonIndex(i)}
								soundEffect={soundEffect}
								audioRefSelect={audioRefSelect}
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
						colorPrincipal={colorsJson[selectColors].rgb}
						colorSecond={colorsJson[selectColors].rgb2}
						showNationality={true}
						flag={lenguage.flag}
					/>
					
					
					<div
						className={styles.options}
						style={{ backgroundImage: btnPress }}
					>
						<div onClick={() => {
							setBtnPress("url(/assets/icon/create_character/btnFondoL.svg)")
							soundEffect(audioRefSelect)
							setGenderType(0)
						}}>
							<Image
								width={50}
								height={50}
								alt='circule'
								src="/assets/icon/create_character/btnMale.svg"
							/>
						</div>

						<div onClick={() => {
							setBtnPress("url(/assets/icon/create_character/btnFondoR.svg)")
							soundEffect(audioRefSelect)
							setGenderType(1)
						}}>
							<Image
								width={50}
								height={50}
								alt='circule'
								src="/assets/icon/create_character/btnGirl.svg"
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h1 className={styles.title}>{lenguage.selectors[selectedButtonIndex]}</h1>
				<div>
					{
						selectores[selectedButtonIndex].id === "base" ?
							(
								data.map((o, i) => {
									return (
										<article key={i} onClick={() => {
											soundEffect(audioRefSelect)
											setBase(i)
										}}>
											<Avatar
												gender={genderType}
												base={i}
												hair={hair}
												suit={suit}
												color={colors}
												colorPrincipal={colorsJson[selectColors].rgb}
												colorSecond={colorsJson[selectColors].rgb2}
												showNationality={false}
												flag={lenguage.flag}

											/>
											<h4 className={base === i ? styles.textShadowActive : styles.textShadowInactive}>{lenguage.races[genderType][i]}</h4>
										</article>
									)
								})
							) : selectores[selectedButtonIndex].id === "hair" ?
								(
									data[base].gender[genderType].hair.map((o, i) => {
										return (
											<article key={i} onClick={() => {
												soundEffect(audioRefSelect)
												setHair(i)
												setcolors(i)
											}}>
												<Avatar
													gender={genderType}
													base={base}
													hair={i}
													suit={suit}
													color={i}
													colorPrincipal={colorsJson[selectColors].rgb}
													colorSecond={colorsJson[selectColors].rgb2}
													showNationality={false}
													flag={lenguage.flag}

												/>
												<h4 className={hair === i ? styles.textShadowActive : styles.textShadowInactive}>{lenguage.looks[i]}</h4>
											</article>
										)
									})
								) : selectores[selectedButtonIndex].id === "suit" ? (
									data[base].gender[genderType].suit.map((o, i) => {
										return (
											<article key={i} onClick={() => {
												soundEffect(audioRefSelect)
												setsuit(i)
											}}>
												<Avatar
													gender={genderType}
													base={base}
													hair={hair}
													suit={i}
													color={colors}
													colorPrincipal={colorsJson[selectColors].rgb}
													colorSecond={colorsJson[selectColors].rgb2}
													showNationality={false}
													flag={lenguage.flag}

												/>
												<h4 className={hair === i ? styles.textShadowActive : styles.textShadowInactive}>{lenguage.styles[i]}</h4>
											</article>
										)
									})
								) : (
									colorsJson.map((c, i) => {
										return (
											<div
												className={styles.color}
												onClick={() => {
													soundEffect(audioRefSelect)
													setselectColors(i)
												}}
												key={i}
											>
												<Image
													width={50}
													height={50}
													alt='icon selector'
													src={c.img}
												/>
												{
													selectColors === i ? (
														<Image
															width={50}
															height={50}
															alt='icon selector'
															src={"/assets/create_character/svg/colors/active.svg"}
														/>
													) : (
														<></>
													)
												}
											</div>
										)
									})
								)

					}

				</div>
			</section>
		</div>
	)
}

export default EditCharacter