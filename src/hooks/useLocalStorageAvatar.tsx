import {useEffect, useState} from 'react';
import {InitialStateAvatar} from "@/src/interface/avatar";

const useLocalStorageAvatar = (key: string, initialValue: InitialStateAvatar | null) => {
    const [storedValue, setStoredValue] = useState<InitialStateAvatar>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        const savedValue = window.localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
};

export default useLocalStorageAvatar;
