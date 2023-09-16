import Image from 'next/image'
import React, { useState } from 'react'
import styles from './EditNacionality.module.scss';
import { editNacionality } from '@/src/interface';

const EditNacionality: React.FC<editNacionality> = ({ flag, setFlag, handleChangeInput, input, soundEffect, audioRefSelect, nacionality, setNacionality, lenguage }) => {


	let flags = {
		"flag": [
			"/assets/nacionality/flag4.svg",
			"/assets/nacionality/flag1.svg",
			"/assets/nacionality/flag2.svg",
			"/assets/nacionality/flag3.svg"
		],
		"nacionality": [
			"/assets/nacionality/usa.gif",
			"/assets/nacionality/argentina.gif",
			"/assets/nacionality/brasil.gif",
			"/assets/nacionality/españa.gif"

		]
	}



	return (
		<div className={styles.container}>
			<section>
				<Image
					width={450}
					height={450}
					alt='circule'
					src="/assets/Circulopequeño.svg"
					priority
				/>
				<Image
					width={450}
					height={450}
					alt='circule'
					src={flag}
					priority
					className={styles.flag}
				/>
				<p>{lenguage.name}</p>
			</section>
			<section>
				<article>
					<div className={styles.select}>

						<Image
							width={45}
							height={450}
							alt='circule'
							src="/assets/palo.svg"
							priority
						/>
						{
							flags.flag.map((f, i) => {
								return (
									<div
										className={styles.flag}
										onClick={() => {
											setFlag(flags.nacionality[i])
											setNacionality(i)
											soundEffect(audioRefSelect)
										}}
										style={{ marginTop: i * 50 }}
									>

										<Image
											width={45}
											height={45}
											alt='flag'
											src={f}
											priority
											key={i}
										/>
										{
											nacionality === i ? (

												<Image
													width={45}
													height={45}
													alt='circule'
													src={"/assets/nacionality/flagActive.svg"}
													priority
													key={i}
												/>
											) : (
												<></>
											)
										}
									</div>
								)
							})
						}

					</div>
					<p>{lenguage.text_presentation}</p>
					<p>{lenguage.frase}</p>
				</article>

			</section>
		</div>
	)
}

export default EditNacionality