import React from "react";
import { Quill } from "react-quill";

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

export const QuillToolbar = (props: { id: string }) => (
    <div 
        id={"toolbar" + props.id} 
        style={{
                textAlign: "center", 
                fontSize: "1.2rem", 
                marginBottom: "20px",
                borderRadius: "20px",
                border: "none",
                background: "rgba(255, 255, 255,0.8)",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.06)",
                padding: "15px",
                color: "#096a09"
            }}
        >
        <span className="ql-formats">
            <select className="ql-size" defaultValue="medium">
                <option value="small">Petit</option>
                <option value="medium">Moyen</option>
                <option value="large">Grand</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Titre</option>
                <option value="2">Sous-titre</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-clean" />
        </span>

        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
        </span>

        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>

        <span className="ql-formats">
            <button className="ql-script" value="super" />
            <button className="ql-script" value="sub" />
        </span>

        <span className="ql-formats">
            <button className="ql-link" />
        </span>
    </div>
);

export default QuillToolbar;