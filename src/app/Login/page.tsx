"use client"
import React, {useEffect, useState} from 'react';
import EditNationality from './component/EditNationality';
import EditCharacter from './component/EditCharacter';
import Resume from './component/Resume';
import Stars from '@/src/component/stars/Stars';
import {soundEffect} from '@/src/helper';
import {Dispatch, RootState} from '@/src/redux';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectColor} from '@/src/redux/reducer/avatar';

import language from '@create_character/language.json';
import styles from './Login.module.scss';

export default function page() {
    const [section, setSection] = useState('identity');
    const [isLoading, setIsLoading] = useState(true); // Add a state variable for loading

    const nationality = useSelector((state: RootState) => state.avatar.nationality);
    const dispatch: Dispatch = useDispatch();

    const {login} = language[nationality];

    useEffect(() => {
        switch (nationality) {
            case 0:
                dispatch(setSelectColor(4));
                break;
            case 1:
                dispatch(setSelectColor(3));
                break;
            case 2:
                dispatch(setSelectColor(11));
                break;
            case 3:
                dispatch(setSelectColor(6));
                break;
        }
        setIsLoading(false);
    }, [nationality]);

    const selectSection = (text: string) => {
        soundEffect('/assets/sounds/btn.mp3');
        setSection(text);
    };

    return (
        <main className={styles.container}>
            <Stars/>
            <section className={styles.navegation}>
                <h1 onClick={() => selectSection('identity')}>{login.base.nationality}</h1>
                <h1 onClick={() => selectSection('edit')}>{login.base.edit}</h1>
                <h1 onClick={() => selectSection('resume')}>{login.base.resume}</h1>
            </section>

            <div className={styles.containerMain}>
                {isLoading ? (
                    <div className={styles.loader}>Loading...</div>
                ) : section === 'identity' ? (
                    <EditNationality nationality={nationality} language={login.nationality}/>
                ) : section === 'edit' ? (
                    <EditCharacter language={login.edit}/>
                ) : (
                    <Resume/>
                )}
            </div>
        </main>
    );
}


