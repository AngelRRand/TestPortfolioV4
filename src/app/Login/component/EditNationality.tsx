import React from 'react'
import Image from 'next/image'

// Redux - Interface
import {editNacionality} from "@/src/interface/avatar";
import {Dispatch} from '@/src/redux';
import {useDispatch} from 'react-redux';
import {setNationality} from "@/src/redux/reducer/avatar";

// Style
import styles from './EditNacionality.module.scss';

// Json
import flags from '../../../../flags.json'

const EditNationality: React.FC<editNacionality> = ({nationality, language}) => {

    const dispatch: Dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <section>
                <Image
                    width={450}
                    height={450}
                    alt='circle'
                    src="/assets/circleSmall.svg"
                    priority
                />
                <Image
                    width={450}
                    height={450}
                    alt='flag'
                    src={language.flag}
                    priority
                    className={styles.flag}
                />
                <p className={styles.name}>{language.name}</p>
            </section>
            <section>
                <article>
                    <div className={styles.select}>

                        <Image
                            width={45}
                            height={450}
                            alt='palo'
                            src="/assets/palo.svg"
                            priority
                        />
                        {
                            flags.map((f, i) => {
                                return (
                                    <div
                                        className={styles.flag}
                                        onClick={() => dispatch(setNationality(i))}
                                        style={{marginTop: i * 50}}
                                        key={i}
                                        id="playButton"
                                    >

                                        <Image
                                            width={45}
                                            height={45}
                                            alt='flag'
                                            src={f}
                                            priority
                                        />
                                        {
                                            nationality === i ? (

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
                    <p>{language.text_presentation}</p>
                    <p>{language.phrase.text}</p>
                    <p>- {language.phrase.author} -</p>
                </article>
            </section>
        </div>
    )

}

export default EditNationality