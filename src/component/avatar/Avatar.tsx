import React from 'react'
import styles from './Avatar.module.scss';
import Image from 'next/image';
import data from "../../../public/assets/create_character/data.json"
const Avatar = () => {




	let newdata = data[0].gender.female

	return (
		<div className={styles.container}>
			<Image
				width={265}
				height={265}
				alt='Estrellas'
				src={newdata.base}
				priority={true}
			/>
			<Image
				width={265}
				height={265}
				alt='Estrellas'
				src={newdata.hair[0].img}
				priority={true}
			/>
			{
				newdata.suit[0].img === "" ?
					<></>
					:

					<Image
						width={265}
						height={265}
						alt='Estrellas'
						src={newdata.suit[0].img}
						priority={true}
					/>
			}
			<Image
				width={265}
				height={265}
				alt='as'
				src={newdata.hair[0].color}
				priority={true}
			/>

		</div>
	)
}

export default Avatar