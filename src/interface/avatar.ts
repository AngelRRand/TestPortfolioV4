export interface InitialStateAvatar {
    nationality: number
    gender: number,
    base: number,
    hair: number,
    hairColor: number,
    selectColor: number,
    suit: number,
    colorPrincipal: string,
    colorSecond: string,
    flag: string,
}

export interface LooksColor {
    color: string,
    secondColor: string
}

export interface LooksColorSelector {
    color: string,
    secondColor: string
    position: number
    gender: number
}

export interface editCharacter {
    avatar: InitialStateAvatar
    language: {
        selectors: string[];
        races: string[][];
        looks: string[];
        styles: string[];
        flag: string
    };
}


export interface editNacionality {
    nationality: number;
    language: {
        name: string;
        text_presentation: string;
        phrase: { text: string, author: string };
        himno: string;
        flag: string;
    };
}


export interface sprite {
    position: position
}

export interface spriteHair {
    position: position
    color: string,
    secondColor: string
}

interface position {
    x: number
    y: number
}