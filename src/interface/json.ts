declare module '@create_character/data.json' {
    interface Hair {
        name: string;
        img: string;
        color: string;
    }

    interface Suit {
        name: string;
        img: string;
    }

    interface Gender {
        base: string;
        hair: Hair[];
        suit: Suit[];
    }

    interface Character {
        name: string;
        gender: Gender[];
    }

    const dataJson: Character[];
    export default dataJson;
}

declare module '@create_character/colors.json' {
    interface Color {
        rgb: string;
        rgb2: string;
        img: string;
    }

    const colorsJson: Color[];
    export default colorsJson;
}

declare module '@create_character/selectors.json' {
    interface Selector {
        img: string;
        style: string;
        text: string;
        id: string;
    }

    const selectors: Selector[];

    export default selectors;
}


declare module '@create_character/language.json' {
    interface LoginBase {
        nationality: string;
        edit: string;
        resume: string;
    }

    interface LoginNationality {
        name: string;
        text_presentation: string;
        phrase: {
            text: string;
            author: string;
        };
        himno: string;
        flag: string;
    }

    interface LoginEdit {
        selectors: string[];
        races: string[][];
        looks: string[];
        styles: string[];
        flag: string;
    }

    interface Nationality {
        name: string;
        login: {
            base: LoginBase;
            nationality: LoginNationality;
            edit: LoginEdit;
        };
    }

    const language: Nationality[];

    export default language;
}

declare module '@create_character/flags.json' {


    const language: string[];

    export default language;
}

declare module '@home/planetsIcons.json' {

    interface Planet {
        title: string;
        link: string;
        planet: {
            img: string;
            alt: string;
        };
        pointer: {
            img: string;
            alt: string;
        };
        style: string;
    }

    const links: Planet[];

    export default links;
}