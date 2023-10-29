export interface IUseLocalStorage {
    <T>(key: string, initialValue: T): [T, (value: T) => void];
}


export interface SelectorOption {
    img: string,
    style: string,
    text: string,
    isSelected: boolean,
    onSelect: () => void
}

export interface ContainerPages {
    children: JSX.Element | JSX.Element[];
    styleContainer: string;
    styleStart: string;
}

export interface LinkPlanet {
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