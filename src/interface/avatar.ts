export interface InitialStateAvatar {
    nationality: number
    gender: number,
    base: number,
    hair: number,
    hairColor: number,
    selectColor: number,
    suit: number,
    flag: string,
    colors: {
        colorPrincipal: string,
        colorSecond: string,
    }
}

export interface LooksColor {
    color: string,
    secondColor: string
}


export interface editCharacter {
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