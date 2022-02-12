import React from 'react'
import { GreenButton, SmallGreenButton } from '../Button/Buttons'

const FileUploader = (props: {accept?: string, id?: string, index?: string, setfile?: Function }) => {
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        if(props.index){ props.setfile(props.index, fileUploaded);}
        else {props.setfile(fileUploaded);}
    };

    return (
        <>
            <SmallGreenButton width="175px" onClick={handleClick}>
                Choisir un fichier
            </SmallGreenButton>
            <input
                accept={props.accept}
                id={props.id}
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};

export default FileUploader;
