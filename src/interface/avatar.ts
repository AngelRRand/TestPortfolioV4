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

export interface avatar {
    children?: React.ReactNode,
    gender: number,
    base: number,
    hair: number,
    hairColor: number,
    suit: number,
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

interface position {
    x: number
    y: number
}