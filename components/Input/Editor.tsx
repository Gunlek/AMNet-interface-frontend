import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, ContentState, RichUtils } from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from 'react-draft-wysiwyg'
import { BlackText } from "../Text/style";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { handleNewLine, insertNewUnstyledBlock } from 'draftjs-utils';

const DraftEditor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)



export default function Editor(html?: string) {
    const [convertedContent, setConvertedContent] = useState(null);
    const [render, setRender] = useState(<BlackText style={{ textAlign: "center" }}>Editeur en cours de chargement</BlackText>)

    if (typeof window !== 'undefined') {
        const HTML = html || "";
        const contentBlock = htmlToDraft(HTML);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const [editorState, setEditorState] = useState(() => EditorState.createWithContent(contentState));
        const [focus, setFocus] = useState(false)

        const handleEditorChange = (state) => {
            setEditorState(state);
            convertContentToHTML();
        }

        const convertContentToHTML = () => {
            let currentContentAsHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
            setConvertedContent(currentContentAsHTML);
        }

        

        useEffect(() => {
            setRender(
                <DraftEditor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    toolbarClassName="toolbar"
                    wrapperClassName="wrapper"
                    editorClassName={focus ? "editorFocused" : "editor"}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    toolbar={{
                        options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji'],
                        fontSize: { options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30] },
                        link: { inDropdown: true },
                        blockType: { options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'] }
                    }}
                    handleReturn={() => {
                        handleEditorChange(RichUtils.insertSoftNewline(editorState));
                        return true
                    }}
                />
            )
        }

            , [editorState])
    }

    return [render, convertedContent]
}

