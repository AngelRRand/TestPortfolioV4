
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

export interface LooksColor{
  color: string,
  secondColor: string
}

export interface LooksColorSelector{
  color: string,
  secondColor: string
  position: number
  gender: number
}