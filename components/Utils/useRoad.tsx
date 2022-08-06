import { useState } from "react";

export default function useRoad(direction: string) {
    const [road, setRoad] = useState(false);

    const roadVariants = {
        exit: road ? { opacity: 0, x: direction == "right" ? 100 : -100, y: 0 } : null
    };

    const roadTo = () => {
        setRoad(true);
    };

    return { roadTo, roadVariants };
}