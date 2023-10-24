import React from 'react'
import styles from './Resume.module.scss';
import Avatar from "@/src/component/avatar/Avatar";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux";
import useLocalStorage from "@/src/hooks/useLocalStorage";

const Resume = () => {
    const [name, setName] = useLocalStorage('name', '');
    const avatar = useSelector((state: RootState) => state.avatar);

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
            "0-1": "I'm a cat-person.",
            "1-0": "I'm a human.",
            "1-1": "I'm a cat-woman."
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
                    <p>{name.toLowerCase() === 'alejandra' && gender === 1 && nationality === 3 ?
                        'Seguro eres buena en python :)' :
                        ''
                    }</p>
                    <button>Create</button>
                </article>
            </section>
        </div>
    )
}

export default Resume