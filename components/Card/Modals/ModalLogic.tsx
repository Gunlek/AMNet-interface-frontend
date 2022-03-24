import { useState } from "react";

export const ModalLogic = () => {
    const [reveal, setreveal] = useState(false);

    function toggle() {
        setreveal(!reveal);
    }

    return {
        reveal,
        toggle
    }
}

export default ModalLogic









