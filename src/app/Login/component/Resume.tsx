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
    } = avatar;
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
                    <p>My name is: <input value={name} onChange={(e) => setName(e.target.value)}/></p>
                    <button>Crear</button>
                </article>
            </section>
        </div>
    )
}

export default Resume