export const soundEffect = (direction: string) => {
    const audio = new Audio(direction);
    audio.currentTime = 0.1;
    audio.volume = 0.3;
    audio.play();
};