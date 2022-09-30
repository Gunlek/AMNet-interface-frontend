import { useState } from "react";

export default function useTransition() {
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true });
    const [Tab, setTab] = useState({ old: null, new: "pending" });

    const handleTabChange = (elmt) => {
        const id = elmt.currentTarget.id;
        const newTab = { ...Tab };
        newTab.old = Tab.new;
        newTab.new = id;
        setTab(newTab);
        const newDisplay = { active: false, declined: false, pending: false };
        newDisplay[id] = true;
        setDisplay(newDisplay);
    }

    return { Display, Tab, handleTabChange }
}