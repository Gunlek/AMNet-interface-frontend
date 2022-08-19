export const variants = (directionIn?: string, directionOut?: string, backgroundColorOut?: string, backgroundColorIn?: string) => {
    return {
        hidden: { opacity: backgroundColorIn ? 1 : 0, x: directionIn === "right" ? -100 : directionIn === "left" ? 100 : 0, backgroundColor: backgroundColorIn  },
        enter: { opacity: 1, x: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
        exit: { opacity: backgroundColorOut ? 1 : 0, x: directionOut === "right" ? 100 : directionOut === "left" ? -100 : 0, backgroundColor: backgroundColorOut },
    }
};