import { useState } from "react";

export default function useTransition(ContainerRef: any) {
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true })
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "", head: "" })
    const [Tab, setTab] = useState({ old: null, new: "pending" });

    const handleTabChange = (elmt) => {
        const id = elmt.currentTarget.id
        const newTab = { ...Tab };
        newTab.old = Tab.new;
        newTab.new = id;
        setTab(newTab);
        const newOpacity = { active: "", declined: "", pending: "", head: "" }
        newOpacity[Tab.new] = "out"
        newOpacity.head = "out"
        setOpacity(newOpacity)

        const timer = setTimeout(() => {
            const newDisplay = { active: false, declined: false, pending: false }
            newDisplay[id] = true
            setDisplay(newDisplay)
            const newOpacity = { active: "", declined: "", pending: "", head: "" }
            newOpacity[id] = "in"
            newOpacity.head = "in"
            setOpacity(newOpacity)
            ContainerRef.current.scrollTo({ top: 0 })
        }, 750);

        return () => clearTimeout(timer);
    }

    return { Display, Opacity, Tab, handleTabChange }
}

