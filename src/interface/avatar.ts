export interface InitialStateAvatar {
    gender: number;
    base: number;
    hair: number;
    hairColor: number;
    selectColor: number;
    suit: number;
    nationality: number;
    colors: colors
}


export interface editCharacter {
    language: {
        selectors: string[];
        races: string[][];
        looks: string[];
        styles: string[];
        flag: string;
    };
}


export interface editNacionality {
    nationality: number
    language: {
        name: string;
        text_presentation: string;
        phrase: { text: string; author: string };
        himno: string;
        flag: string;
    };
}


export interface avatar {
    children?: React.ReactNode;
    gender: number;
    base: number;
    hair: number;
    hairColor: number;
    suit: number;
}

export interface avatarHairMap {
    colors: colors;
    hair: number
    gender: number;
}

export interface spriteHairMap {
    position: position;
    colors: colors
    hair: number;
    gender: number;
}


export interface spriteHair {
    position: position;
    colorPrincipal: string;
    colorSecond: string;
}

interface position {
    x: number
    y: number
}

export interface colors {
    colorPrincipal: string;
    colorSecond: string;
}