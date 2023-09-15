import Image from 'next/image'
import React, { useState } from 'react'
import styles from './EditNacionality.module.scss';
import { editNacionality } from '@/src/interface';

const EditNacionality: React.FC<editNacionality> = ({ flag, setFlag, handleChangeInput, input, soundEffect, audioRefSelect }) => {

	const [count, setCount] = useState(0)

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

	let frases = [
		"Dude! Space is mind-blowing. Look at us, just chilling here with our coffee, and up there, there are billions of galaxies, stars, and planets. Imagine, the Milky Way is just one neighborhood in that vastness. Every time I look up, I think: What's out there?. It's like football – or, well, soccer for us – you're always in for a surprise. The universe is one wild ride, man!",
		"¡Che! El espacio es una locura. Mirá, nosotros acá tomando mate, y allá arriba hay miles de millones de galaxias, estrellas y planetas. Imaginate, la Vía Láctea es solo un barrio en ese montón. Cada vez que miro al cielo, pienso: ¿qué habrá allá afuera?. Es como el fútbol, uno nunca termina de sorprenderse. ¡El universo es un quilombo hermoso, vieja",
		"E aí, mano! O espaço é uma loucura total. Olha, a gente aqui tomando um cafezinho, e lá em cima tem bilhões de galáxias, estrelas e planetas. Imagina só, a Via Láctea é só uma favela nesse mundão. Toda vez que olho para o céu, penso: o que será que tem lá?. É tipo o futebol, a gente nunca para de se surpreender. O universo é um samba bonito, cara!",
		"¡Tío! El espacio es una pasada. Mira, nosotros aquí tomando un café con leche, y ahí arriba hay miles de millones de galaxias, estrellas y planetas. Imagínate, la Vía Láctea es solo un barrio en ese mogollón. Cada vez que miro al cielo, pienso: ¿qué habrá por ahí?. Es como el fútbol, nunca deja de asombrarte. ¡El universo es la caña, macho!"
	]


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
				<p>Estados unidos</p>
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
											setCount(i)
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
											count === i ? (

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
					{frases[count]}
				</article>
				<input placeholder='name' maxLength={10} value={input} onChange={(e) => handleChangeInput(e)} className={styles.input} />

			</section>
		</div>
	)
}

export default EditNacionality