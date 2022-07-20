export const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

export const convertToHumanReadableDate = (value: string): string => {
    let date = new Date(value);
    return date.toLocaleDateString()
}