import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './EditNacionality.module.scss';
import { editNacionality } from '@/src/interface';

const EditNacionality: React.FC<editNacionality> = ({ soundEffect, audioRefSelect, nacionality, setNacionality, lenguage }) => {

	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		/* soundEffectHimnos(audioRef); */
	}, [nacionality]);
	let flags = [
			"/assets/icon/create_character/btnUsa.svg",
			"/assets/icon/create_character/btnArgentina.svg",
			"/assets/icon/create_character/btnBrasil.svg",
			"/assets/icon/create_character/btnSpain.svg"
	]


	const soundEffectHimnos = (audio: any) => {
		if (audio.current) {
			audio.current.currentTime = 0.1;
			audio.current.volume = 0.1;
			audio.current.play();
		}
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
					src={lenguage.flag}
					priority
					className={styles.flag}
				/>
				<p className={styles.name}>{lenguage.name}</p>
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
							flags.map((f, i) => {
								return (
									<div
										className={styles.flag}
										onClick={() => {
											soundEffect(audioRefSelect)
											setNacionality(i)
										}}
										style={{ marginTop: i * 50 }}
										key={i}
									>

										<Image
											width={45}
											height={45}
											alt='flag'
											src={f}
											priority
										/>
										{
											nacionality === i ? (

												<Image
													width={45}
													height={45}
													alt='circule'
													src={"/assets/icon/create_character/btnFlagActive.svg"}
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
			<audio ref={audioRef} src={lenguage.himno} preload="auto" />
		</div>
	)
}

export default EditNacionality