export const variants = (directionIn?: string, directionOut?: string) => {
    return {
        hidden: { opacity: 0, x: directionIn === "right" ? -100 : directionIn === "left" ? 100 : 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: directionOut === "right" ? 100 : directionOut === "left" ? -100 : 0, y: 0, backgroundColor: null },
    }
};