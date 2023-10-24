import styles from "@/src/app/Login/component/EditCharacter.module.scss";
import Image from "next/image";
import React from "react";
import {setGender} from "@/src/redux/reducer/avatar";
import {Dispatch} from "@/src/redux";
import {useDispatch} from "react-redux";

interface SwitchGenderProps {
    gender: number;
}

const SwitchGender: React.FC<SwitchGenderProps> = ({gender}) => {

    const dispatch: Dispatch = useDispatch();
    const switchGender = (gender: number) => {
        if (gender === 0) {
            dispatch(setGender(1))
        } else {
            dispatch(setGender(0))

        }
    }

    return (
        <button
            onClick={() => switchGender(gender)}
            className={styles.options}
        >

            {
                gender === 0 ? (
                    <Image
                        width={50}
                        height={50}
                        alt='circule'
                        src="/assets/icon/create_character/btnMale.svg"
                    />
                ) : (
                    <Image
                        width={50}
                        height={50}
                        alt='circule'
                        src="/assets/icon/create_character/btnGirl.svg"
                    />
                )
            }

        </button>
    )
}

export default SwitchGender