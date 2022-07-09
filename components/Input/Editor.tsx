import React, { useState } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { defaultProps } from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const QuillToolbar = dynamic(() => import("./toolbar"), { ssr: false });

export default function Editor(id: string, html?: string) {
    const [value, setValue] = useState(html || "");
    const [focus, setFocus] = useState(false)
    const modules = {
        toolbar: {
            container: "#toolbar" + id,
        },
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
            <QuillToolbar id={id} />
            <ReactQuill
                id={"Editor" + id}
                className={focus? "focused" : undefined}
                onBlur={() =>{setFocus(false)}}
                onFocus={() => {setFocus(true)}}
                modules={modules}
                formats={formats}
                value={value}
                onChange={setValue}
            />
        </>
        ,
        value
    ]
}

