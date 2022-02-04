import React from 'react'
import styled from 'styled-components'
import { GreenButton, SmallGreenButton } from '../Button/Buttons'

const HiddenFile = styled.input.attrs({ type: 'file' })`

  width: 200px;
`;


const FileUploader = props => {
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
        props.handleFile(fileUploaded);
    };

    return (
        <>
            <SmallGreenButton width="175px" onClick={handleClick}>
                Choisir un fichier
            </SmallGreenButton>
            <input
                {...props}
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};

export default FileUploader;
