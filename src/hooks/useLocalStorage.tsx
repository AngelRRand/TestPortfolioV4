"use client"
import {useState} from 'react';
import {IUseLocalStorage} from '../interface';

const useLocalStorage: IUseLocalStorage = (key, initialValue) => {


    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        const savedValue = window.localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    });

    const setValue = (value: typeof initialValue) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    console.log()

    return [storedValue, setValue];
}

export default useLocalStorage;
