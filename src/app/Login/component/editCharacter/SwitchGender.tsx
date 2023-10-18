import styles from "@/src/app/Login/component/EditCharacter.module.scss";
import Image from "next/image";
import React, {useState} from "react";
import {setGender} from "@/src/redux/reducer/avatar";
import {Dispatch} from "@/src/redux";
import {useDispatch} from "react-redux";

const SwitchGender = () => {

    let url = "url(/assets/icon/create_character/btnFondoR.svg)"
    const dispatch: Dispatch = useDispatch();
    const [btnPress, setBtnPress] = useState(url)

    const switchGender = (url: string, gender: number) => {
        dispatch(setGender(gender))
        setBtnPress(url)
    }

    return (
        <button
            className={styles.options}
            style={{backgroundImage: btnPress}}
        >
            <div onClick={() => switchGender("url(/assets/icon/create_character/btnFondoL.svg)", 0)}>
                <Image
                    width={50}
                    height={50}
                    alt='circule'
                    src="/assets/icon/create_character/btnMale.svg"
                />
            </div>

            <div onClick={() => switchGender("url(/assets/icon/create_character/btnFondoR.svg)", 1)}>
                <Image
                    width={50}
                    height={50}
                    alt='circule'
                    src="/assets/icon/create_character/btnGirl.svg"
                />
            </div>
        </button>
    )
}

export default SwitchGender