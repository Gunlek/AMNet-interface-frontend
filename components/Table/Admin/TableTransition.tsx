import { useState } from "react";
import useMediaQuery from "../../MediaQueries/MediaQuery";

export default function useTransition(ContainerRef: any, Requests: any[]) {
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true });
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "", head: "" });
    const [Tab, setTab] = useState({ old: null, new: "pending" });
    const minWidth1000 = !useMediaQuery('(min-width:1000px)');
    const requestExist = { active: false, declined: false, pending: false };
    let i = 0;

    while ((!requestExist.active || !requestExist.declined || !requestExist.pending) && (i < Requests.length)) {
        if (!requestExist.active)
            requestExist.active = Requests[i].material_state === "active" || Requests[i].access_state === "active";
        if (!requestExist.declined)
            requestExist.declined = Requests[i].material_state === "declined" || Requests[i].access_state === "declined";
        if (!requestExist.pending)
            requestExist.pending = Requests[i].material_state === "pending" || Requests[i].access_state === "pending";
        i++;
    }

    const handleTabChange = (elmt) => {
        const id = elmt.currentTarget.id;
        const newTab = { ...Tab };
        newTab.old = Tab.new;
        newTab.new = id;
        setTab(newTab);

        if (requestExist[newTab.old] || !minWidth1000) {
            const newOpacity = { active: "", declined: "", pending: "", head: "" };
            newOpacity[Tab.new] = "out";
            newOpacity.head = "out";
            setOpacity(newOpacity);
        }

        const timer = setTimeout(() => {
            const newDisplay = { active: false, declined: false, pending: false };
            newDisplay[id] = true;
            setDisplay(newDisplay);
            const newOpacity = { active: "", declined: "", pending: "", head: "" };
            newOpacity[id] = "in";
            newOpacity.head = "in";
            setOpacity(newOpacity);
            ContainerRef.current.scrollTo({ top: 0 });
        }, (!requestExist[newTab.old] && minWidth1000) ? 0 : 590);

        return () => clearTimeout(timer);
    }

    return { Display, Opacity, Tab, handleTabChange }
}

