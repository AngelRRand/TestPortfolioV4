import { MutableRefObject } from 'react';
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

export interface AvatarConfig {
	gender: any,
	base: number,
	hair: number,
	suit: number,
	color: number,
	colorPrincipal: string,
	colorSecond: string,

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
	genderType: number
	base: number
	hair: number
	suit: number
	colors: number
	selectColors: number
	audioRefSelect: MutableRefObject<HTMLAudioElement | null>;
	soundEffect: (audio: any) => void;
	setGenderType: (value: number) => void
	setBase: (value: number) => void
	setHair: (value: number) => void
	setcolors: (value: number) => void
	setsuit: (value: number) => void
	setselectColors: (value: number) => void
}

export interface editNacionality {
	flag: string
	input: string
	nacionality: number
	audioRefSelect: MutableRefObject<HTMLAudioElement | null>;
	setFlag: (value: string) => void;
	setNacionality: (value: number) => void
	soundEffect: (audio: any) => void;
	handleChangeInput: (audio: any) => void;
	lenguage: {
		name: string;
		text_presentation: string;
		frase: string;
	};
}