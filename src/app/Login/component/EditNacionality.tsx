import Image from 'next/image'
import React, { useState } from 'react'
import styles from './EditNacionality.module.scss';
import { editNacionality } from '@/src/interface';

const EditNacionality: React.FC<editNacionality> = ({ flag, setFlag, handleChangeInput, input }) => {


	let flags = {
		"flag": [
			"/assets/nacionality/flag1.svg",
			"/assets/nacionality/flag2.svg",
			"/assets/nacionality/flag3.svg",
			"/assets/nacionality/flag4.svg"
		],
		"nacionality": [
			"/assets/nacionality/argentina.gif",
			"/assets/nacionality/brasil.gif",
			"/assets/nacionality/españa.gif",
			"/assets/nacionality/usa.gif"

		]
	}
	console.log(flags.nacionality[0])
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
										onClick={() => setFlag(flags.nacionality[i])}
										style={{ marginTop: i * 50 }}
									>

										<Image
											width={45}
											height={45}
											alt='circule'
											src={f}
											priority
											key={i}
										/>
									</div>
								)
							})
						}

					</div>
					¡Che! El espacio es una locura. Mirá, nosotros acá tomando mate, y allá arriba hay miles de millones de galaxias, estrellas y planetas. Imaginate, la Vía Láctea es solo un barrio en ese montón. Cada vez que miro al cielo, pienso: "¿qué habrá allá afuera?". Es como el fútbol, uno nunca termina de sorprenderse. ¡El universo es un quilombo hermoso, vieja!
				</article>
				<input placeholder='name' maxLength={10} value={input} onChange={(e) => handleChangeInput(e)} className={styles.input} />

			</section>
		</div>
	)
}

export default EditNacionality