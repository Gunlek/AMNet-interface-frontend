import { useState } from "react";

export default function usePageTransition(path: string) {
    const [road, setRoad] = useState(false);
    const [roadToHomepage, setRoadToHomepage] = useState(false);

    const pageTransition = {
        exit: road ? { opacity: 0, x: path == "admin" ? -100 : 100 } : roadToHomepage ? { opacity: 0, x: 100 } : null
    };

    const roadTo = () => {
        setRoad(true);
    };

    const roadToHome = () => {
        setRoadToHomepage(true);
    };

    return { roadTo, pageTransition, roadToHome };
}