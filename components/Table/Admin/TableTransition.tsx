import { useState, useEffect } from "react";

export default function TableTransition(status: { old: string, new: string }, ContainerRef: any) {
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true })
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "", head: "" })

    useEffect(() => {
        if (status.old !== null) {
            const newOpacity = { active: "", declined: "", pending: "", head: "" }
            newOpacity[status.old] = "out"
            newOpacity.head = "out"
            setOpacity(newOpacity)

            setTimeout(() => {
                const newDisplay = { active: false, declined: false, pending: false }
                newDisplay[status.new] = true
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "", head: "" }
                newOpacity[status.new] = "in"
                newOpacity.head = "in"
                setOpacity(newOpacity)
                ContainerRef.current.scrollTo({ top: 0 })
            }, 490);
        }
    }, [status]);

    return { Display, Opacity }
}