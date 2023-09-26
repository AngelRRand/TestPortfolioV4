import React from 'react'
import styles from './Avatar.module.scss';
import Image from 'next/image';
import data from "../../../public/assets/create_character/data.json"
import { AvatarConfig } from '@/src/interface';
import Degraded from './hair/human/female/DegradedF';
import HumanColors from './hair/human/HumanColors';
const Avatar: React.FC<AvatarConfig> = ({ gender, base, hair, suit, color, colorPrincipal, colorSecond, showNacionality = false, flag }) => {
	let raza = data[base]
	if (raza.name === "Human") {
		let newdata = raza.gender[gender]

		return (
			<div className={styles.container}>
				<Image
					width={265}
					height={265}
					alt='base'
					src={newdata.base}
					priority={true}
				/>
				<Image
					width={265}
					height={265}
					alt='hair'
					src={newdata.hair[hair].img}
					priority={true}
				/>
				<HumanColors
					color={colorPrincipal}
					secondColor={colorSecond}
					position={color}
					gender={gender}
				/>
				{
					newdata.suit[suit].img === "" ?
						<></>
						:

						<Image
							width={265}
							height={265}
							alt='suit'
							src={newdata.suit[suit].img}
							priority={true}
						/>
				}
				{
					showNacionality ? (
						<Image
							width={50}
							height={50}
							alt='circule'
							src={flag}
							className={styles.flag}
						/>
					) : (
						<></>
					)
				}

			</div>
		)
	} else {
		let newdata = raza.gender[gender]
		return (
			<div className={styles.container}>
				<Image
					width={265}
					height={265}
					alt='base'
					src={newdata.base}
					priority={true}
				/>
				<Image
					width={265}
					height={265}
					alt='color'
					src={newdata.hair[color].color}
					priority={true}
				/>
				<Image
					width={265}
					height={265}
					alt='hair'
					src={newdata.hair[hair].img}
					priority={true}
				/>
				{
					newdata.suit[suit].img === "" ?
						<></>
						:

						<Image
							width={265}
							height={265}
							alt='suit'
							src={newdata.suit[suit].img}
							priority={true}
						/>
				}


			</div>
		)
	}

}

export default Avatar