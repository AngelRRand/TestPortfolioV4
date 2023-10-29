import React from 'react'
import styles from './Resume.module.scss';
import Avatar from "@/src/component/avatar/Avatar";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import Link from "next/link";
import useLocalStorageAvatar from "@/src/hooks/useLocalStorageAvatar";

const Resume = () => {
    const avatar = useSelector((state: RootState) => state.avatar);

    const [name, setName] = useLocalStorage('name', '');
    const [avatarStorage, setAvatar] = useLocalStorageAvatar("avatar", avatar);

    const {
        gender,
        base,
        hair,
        hairColor,
        suit,
        nationality
    } = avatar;

    const textOptions = {
        default: "Hello, my name is [Name].",

        genderAndBase: {
            "0-0": "I'm a human.",
            "0-1": "I'm a cat.",
            "1-0": "I'm a human.",
            "1-1": "I'm a cat."
        } as Record<string, string>,

        nationality: {
            "0": "I'm from the USA.",
            "1": "I'm from Argentina.",
            "2": "I'm from Brazil.",
            "3": "I'm from Spain."
        } as Record<string, string>
    };

    const getGenderAndBaseText = (gender: number, base: number) => {
        const key = `${gender}-${base}`;
        return textOptions.genderAndBase[key] || textOptions.default;
    };

    const getNationalityText = (nationality: number) => {
        return textOptions.nationality[nationality] || '';
    };

    const introductionText = getGenderAndBaseText(gender, base).replace('[Name]', name);


    return (
        <div className={styles.container}>
            <section>
                <Avatar gender={gender}
                        base={base}
                        hair={hair}
                        suit={suit}
                        hairColor={hairColor}
                />
            </section>
            <section>
                <article className={styles.biografiContainer}>
                    <h2>My Biographic</h2>
                    <p>Hello my name is: <input value={name} onChange={(e) => setName(e.target.value)}/></p>
                    <p>{introductionText} {getNationalityText(nationality)}</p>
                    {
                        name.toLowerCase() === 'alejandra' &&
                        gender === 1 &&
                        base === 0 &&
                        nationality === 3 ? (
                            <p className={styles.secret} style={{opacity: 1}}>Seguramente eres buena en python :^)</p>

                        ) : (
                            <p className={styles.secret} style={{opacity: 0}}></p>
                        )
                    }
                    <Link href={"/"}>
                        <button
                            onClick={() => setAvatar(avatar)}
                        >Create
                        </button>
                    </Link>
                </article>
            </section>
        </div>
    )
}

export default Resume