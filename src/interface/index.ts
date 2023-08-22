export interface IUseLocalStorage {
    <T>(key: string, initialValue: T): [T, (value: T) => void];
  }