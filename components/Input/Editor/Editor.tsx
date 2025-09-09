import React, { useState } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
const QuillToolbar = dynamic(() => import("./toolbar"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor(id: string, html?: string) {
    const [value, setValue] = useState(html || "");
    const [focus, setFocus] = useState(false)
    const modules = {
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true
        }

    };

    const formats = [
        "header",
        "size",
        "bold",
        "italic",
        "underline",
        "align",
        "script",
        "list",
        "bullet",
        "indent",
        "link",
        "color",
    ];

    return [
        <>
            {QuillToolbar && <ReactQuill 
                id={"Editor" + id}
                modules={modules}
                className={focus ? "focused" : undefined}
                onBlur={() => { setFocus(false) }}
                onFocus={() => { setFocus(true) }}
                formats={formats}
                value={value} 
                onChange={setValue}
            />
            }
        </>
        ,
        value,
        setValue
    ]
}

