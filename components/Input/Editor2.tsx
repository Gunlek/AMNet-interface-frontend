import React, { useState } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor(html?: string) {
    const [value, setValue] = useState(html || "");

    return [<ReactQuill value={value} onChange={setValue}/>, value]
}

